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

            const Produto = await produto.create({
                nome,
                categoria, 
                descricao,
                value,
                ativo
            })

        return response.json(Produto);
    },

    async update(request, response) {
        const id = request.params.id;
        const {nome, categoria, descricao, value, ativo } = request.body;
        const Produto = await produto.find({
            _id: {
                $in: id,
            }
        }).updateOne({
            nome,
            categoria, 
            descricao,
            value,
            ativo
        })

        return response.json(Produto);
    },

    async delete(request, response) {
        const id = request.params.id;
        const Produto = await produto.deleteOne({
            _id: {
                $in: id,
            }
        })

        return response.json(Produto);
    },

}