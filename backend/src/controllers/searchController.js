const produto = require('../models/produto');


module.exports = {
    async index(request, response) {
        const { intinerario } = request.query;

        const Produto = await produto.find({
            intinerario: {
                $in: techsArrays,
            },
        });
        return response.json(Produto);

    }
}