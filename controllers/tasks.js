const pool = require('../db');

const getTasks = async(req, res) => {

    try {

        const { user } = req.user;
        const values = [user];
        const query = "SELECT description FROM Task WHERE user = ?";

        const [rows] = await pool.execute(query, values);

        if (rows.length === 0) {

            return res.status(404).json({ message: "Não há tarefas cadastradas."});
        }

        return res.json({rows});
    }

    catch(e) {

        return res.status(500).json({ message: "Erro ao buscar tarefas!"});
    }

}

const postTask = async(req, res) => {

    try {

        const { user } = req.user;
        const { task } = req.body;
        const values = [task, user];
        const query = "INSERT INTO Task (description, user) VALUES (?, ?)";

        const [result] = await pool.execute(query, values);

        return res.status(201).json({ message: "Tarefa criada! "});        
    }

    catch (e) {

        return res.status(500).json({ message: "Erro ao criar nova tarefa! "});
    }
}

module.exports = { getTasks, postTask };
