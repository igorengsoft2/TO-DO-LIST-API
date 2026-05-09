const jwt = require('jsonwebtoken');
const pool = require('../db');
require('dotenv').config();

const loginToken = async(req, res) => {

    let user = [];

    try {

        const { username, password } = req.body;
        const values = [username];

        const query = "SELECT nome, senha, id FROM usuario WHERE nome = ? AND password = ?";
        const [rows] = await pool.execute(query, values);

        user = rows[0];
        console.log(user);
    }

    catch(e) {

        return res.status(500).json({message: 'Erro ao buscar usuário'});
    }

    if (user.length == 0) {

        return res.status(401).json({message: 'Credenciais inválidas!'});
    }

    try {

        const userId = user.id;

        const token = jwt.sign({id: userId}, process.env.JWT_SECRET, 
        {expiresIn: process.env.JWT_EXPIRES_IN});

        res.json({token});
    }

    catch(e) {

        return res.status(500).json({message: 'Erro ao gerar token!'});
    }
}

const getProtected = (req, res) => {

    res.json({ message: "Você acessou uma rota protegida!"});
}

module.exports = { getProtected, loginToken };   