const mysql = require('../db');

const verifyUser = async(req, res) => {

    const { username, password } = req.body;
    const values = [username, password];
    const query = "SELECT nome, senha, id FROM usuario WHERE nome = ? AND senha = ?";
    const [rows] = await mysql.execute(query, values);

    return rows;
}

module.exports = verifyUser;