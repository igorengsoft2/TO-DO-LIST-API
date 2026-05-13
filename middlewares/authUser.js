require('dotenv').config();

const jwt = require('jsonwebtoken');
const pool = require('../db');

async function authToken(req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) return res.sendStatus(401);

    try {

         const user = jwt.verify(token, process.env.JWT_SECRET);
         const query = "SELECT nome, id FROM Usuario WHERE id = ?";
         const values = [user.id];
         const [rows] = await pool.execute(query, values);          

        if(rows.length === 0) {

            return res.sendStatus(401);
        }
        
        req.user = rows[0];
        next();
    }

    catch(e) {

        console.log(e);
        return res.sendStatus(403);
    }
}

module.exports = authToken;