const express = require('express');
const mongoose = require('mongoose');
const routes= require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://supermercado:gust@1990@cluster0-1qr6n.mongodb.net/produto?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);