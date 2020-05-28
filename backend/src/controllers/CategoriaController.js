const categoria = require('../models/categoria');

module.exports = { 
    async index(request, response) {
        const id = request.params.id;
        const Categoria = await categoria.find({
            _id: {
                $in: id,
            }
        });
        
        return response.json(Categoria);

    },

    async store(request, response) {
        const { nome, descricao, ativo } = request.body;

            Categoria = await categoria.create({
                nome,
                descricao,
                ativo

            })
    return response.json(Categoria);
    },

    async update(request, response) {
        const id = request.params.id;
        const {nome, categoria, descricao, ativo } = request.body;
        const Categoria = await categoria.find({
            _id: {
                $in: id,
            }
        }).updateOne({
            nome,
            descricao,
            ativo
        })

        return response.json(Categoria);
    },

}