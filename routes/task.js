const express = require('express');
const authUser = require('../middlewares/authUser');
const { getTasks } = require('../controllers/tasks');
const taskRouter = express.Router();

taskRouter.get('/all', authUser, getTasks);

module.exports = { taskRouter };