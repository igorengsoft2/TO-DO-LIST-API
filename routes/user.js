const express = require('express');
const userRouter = express.Router();
const loginToken = require('../controllers/users');

userRouter.post('/login', loginToken);

module.exports = userRouter;