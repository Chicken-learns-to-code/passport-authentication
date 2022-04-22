const mongoose = require('mongoose');
const Product = new mongoose.Schema({
    name: {type: String},
    photo: {type: String},
    price: {type: 'Number'},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product',Product);