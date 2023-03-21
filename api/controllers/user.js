import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuario";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    "INSERT INTO usuário(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário cadastrado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q = "UPDATE usuario SET `nome` = ? `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?;"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    })
};


export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuario WHERE `id` = ?";

    db.query(q, [res.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
 
    });
};