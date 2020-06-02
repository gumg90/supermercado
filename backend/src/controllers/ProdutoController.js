const produto = require('../models/produto');

module.exports = { 
    async index(request, response) {
         const Produto = await produto.find({

        });
        return response.json(Produto);
        

    },

    async list(request, response) {
        const id = request.params.id;
        const Produto = await produto.find({
            _id: {
                $in: id,
            }
        });
        return response.json(Produto);

    },

    async store(request, response) {
        const { nome, categoria, descricao,  value, ativo } = request.body;

            Produto = await produto.create({
                nome,
                categoria, 
                descricao,
                value,
                ativo

            })
            console.log(Produto)

    return response.json(Produto);
    },

    async update(request, response) {
        const id = request.params.id;
        const {nome, categoria, descricao, value } = request.body;
        const Produto = await produto.find({
            _id: {
                $in: id,
            }
        }).updateOne({
            nome,
            categoria,
            descricao,
            value,
        })

        return response.json(Produto);
    },

}