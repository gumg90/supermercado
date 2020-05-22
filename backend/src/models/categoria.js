const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    ativo: Boolean
});

module.exports= mongoose.model('categoria', categoriaSchema);