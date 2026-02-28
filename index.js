require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const logger = require('./middlewares/logger');
const connectDB = require('./config/db');

connectDB();

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', authRouter);
app.use('/items', itemsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
