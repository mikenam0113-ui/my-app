const express = require('express');
const router = express.Router();

let items = [
  { id: 1, name: '아이템 1' },
  { id: 2, name: '아이템 2' },
];

// 전체 조회
router.get('/', (req, res) => {
  res.json(items);
});

// 단일 조회
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
  res.json(item);
});

// 생성
router.post('/', (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// 수정
router.put('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
  item.name = req.body.name;
  res.json(item);
});

// 삭제
router.delete('/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
  items.splice(index, 1);
  res.json({ message: '삭제되었습니다.' });
});

module.exports = router;
