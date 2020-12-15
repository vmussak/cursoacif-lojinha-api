const model = require('./model');

module.exports = {
    buscarTodos,
    buscarPorId,
    inserir,
    alterar,
    remover
};

async function buscarTodos(req, res) {
    try {
        let result = await model.findAll({
            raw: true,
            attributes: ['id', 'nome']
        });

        res.status(200).json({
            content: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Deu erro',
            error: error.message
        })
    }
}

async function buscarPorId(req, res) {
    try {
        let result = await model.findByPk(+req.params.id, {
            raw: true,
            attributes: ['id', 'nome']
        });

        res.status(200).json({
            content: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Deu erro',
            error: error.message
        })
    }
}

async function inserir(req, res) {
    try {
        if(!req.body.nome)
            return res.status(406).json({message: 'O campo "nome" é obrigatório'})

        let result = await model.create({
            nome: req.body.nome
        });

        res.status(200).json({
            content: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Deu erro',
            error: error.message
        })
    }
}

async function alterar(req, res) {
    try {
        if(!req.body.nome)
            return res.status(406).json({message: 'O campo "nome" é obrigatório'})

        let result = await model.findByPk(+req.params.id);
        result.nome = req.body.nome;

        let save = await result.save();

        res.status(200).json({
            content: save
        });
    } catch (error) {
        res.status(500).json({
            message: 'Deu erro',
            error: error.message
        })
    }
}

async function remover(req, res) {
    try {
        let result = await model.findByPk(+req.params.id);
        result.destroy();

        res.status(200).json({
            content: {}
        });
    } catch (error) {
        res.status(500).json({
            message: 'Deu erro',
            error: error.message
        })
    }
}