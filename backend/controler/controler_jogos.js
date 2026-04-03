import { db } from "../db/db.js"

export const getJogos = (_, res) =>{
    const q = "SELECT * FROM jogos";
    db.query(q, (err, data) =>{
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const deleteJogo = (req, res) =>{
    const jogoId = req.params.id;
    const q = "DELETE FROM jogos WHERE id = ?";
    db.query(q, [jogoId], (err, result) =>{
        if (err) return res.json(err);
        if (result.affectedRows === 0) return res.status(404).json("Jogo não encontrado");
        return res.status(200).json("Jogo deletado com sucesso");
    });
}

export const addJogos = (req, res) =>{
    const { nome, genero, plataforma, preco, ano_lancamento, desenvolvedora } = req.body;
    if (!nome || !preco) return res.status(400).json("Nome e preço são obrigatórios");

    const q = "INSERT INTO jogos (nome, genero, plataforma, preco, ano_lancamento, desenvolvedora) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(q, [nome, genero, plataforma, preco, ano_lancamento, desenvolvedora], (err) =>{
        if (err) return res.json(err);
        return res.status(200).json("Jogo adicionado com sucesso");
    });
}

export const updateJogo = (req, res) =>{
    const jogoId = req.params.id;
    const { nome, genero, plataforma, preco, ano_lancamento, desenvolvedora } = req.body;
    const q = "UPDATE jogos SET nome = ?, genero = ?, plataforma = ?, preco = ?, ano_lancamento = ?, desenvolvedora = ? WHERE id = ?";
    db.query(q, [nome, genero, plataforma, preco, ano_lancamento, desenvolvedora, jogoId], (err, result) =>{
        if (err) return res.json(err);
        if (result.affectedRows === 0) return res.status(404).json("Jogo não encontrado");
        return res.status(200).json("Jogo atualizado com sucesso");
    });
}