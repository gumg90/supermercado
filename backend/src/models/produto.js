const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    descricao: String,
    value: Number,
    ativo: Boolean
});

module.exports= mongoose.model('produto', produtoSchema);