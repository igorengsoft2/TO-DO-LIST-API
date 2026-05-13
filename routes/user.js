const express = require('express');
const userRouter = express.Router();

const { loginToken, getUsers } = require('../controllers/users');
const authUser = require('../middlewares/authUser');

userRouter.post('/login', loginToken);
userRouter.get('/all', authUser, getUsers);

module.exports = userRouter;