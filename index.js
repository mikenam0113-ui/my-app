const express = require('express');
const app = express();
const PORT = 3000;

const itemsRouter = require('./routes/items');
const logger = require('./middlewares/logger');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/items', itemsRouter);

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
