const parseStringArray = require('../utils/parseStringArray');
const produto = require('../models/produto');


module.exports = {
    async index(request, response) {
        const { intinerario } = request.query;

        const techsArrays = parseStringArray(intinerario);
        const Produto = await produto.find({
            intinerario: {
                $in: techsArrays,
            },
        });
        return response.json(Produto);

    }
}