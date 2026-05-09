const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

module.exports = app;
