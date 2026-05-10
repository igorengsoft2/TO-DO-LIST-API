const express = require('express');
const authUser = require('../middlewares/authUser');
const { getTasks, postTask } = require('../controllers/tasks');
const taskRouter = express.Router();

taskRouter.get('/all', authUser, getTasks);
taskRouter.post('/newtask', authUser, postTask);

module.exports = { taskRouter };