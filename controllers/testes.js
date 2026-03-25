const jwt = require('jsonwebtoken');
const verifyUser = require('../utils/verify');
require('dotenv').config();


const accessApi = (req, res) => {

    res.json({ message: 'Você acessou a api'});
}

const loginToken = async(req, res) => {

    let user = []

    try {

        user = await verifyUser(req, res);
        console.log(user);
    }

    catch(e) {

        return res.status(500).json({message: 'Erro ao buscar usuário'});
    }

    if (user.length == 0) {

        return res.status(401).json({message: 'Credenciais inválidas!'});
    }

    try {

        const userId = user[0].id

        const token = jwt.sign({id: userId}, process.env.JWT_SECRET, 
        {expiresIn: process.env.JWT_EXPIRES_IN});

        res.json({token});
    }

    catch(e) {

        return res.status(500).json({message: 'Erro ao gerar token!'});
    }
}

const getProtected = (req, res) => {

    res.json({ message: "Você acessou uma rota protegida!"})
}

module.exports = { accessApi, getProtected, loginToken };