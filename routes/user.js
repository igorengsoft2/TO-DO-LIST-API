const express = require('express');
const router = express.Router();
const testes = require('../controllers/users');
const auth = require('../middlewares/authUser')

router.get('/', testes.accessApi);
router.post('/login', testes.loginToken);
router.get('/protected', auth.authToken, testes.getProtected);

module.exports = router;