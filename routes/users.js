const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 전체 조회
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 단일 조회
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 생성
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true }
    ).select('-password');
    if (!user) return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    res.json({ message: '삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
