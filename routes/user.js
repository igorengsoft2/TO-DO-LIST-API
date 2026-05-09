const express = require('express');
const router = express.Router();
const { accessApi, loginToken, getProtected } = require('../controllers/users');
const authToken = require('../middlewares/authUser')

router.get('/', accessApi);
router.post('/login', loginToken);
router.get('/protected', authToken, getProtected);

module.exports = router;