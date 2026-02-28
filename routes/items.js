const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const auth = require('../middlewares/auth');

// 전체 조회
router.get('/', auth, async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 단일 조회
router.get('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 생성
router.post('/', auth, async (req, res) => {
  try {
    const item = await Item.create({ name: req.body.name });
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 수정
router.put('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!item) return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 삭제
router.delete('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
    res.json({ message: '삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
