const homeRoute = require('./home');
const userRoute = require('./users');
const productRoute = require('./product');
function route(app) {
    app.use('/products', productRoute);
    app.use('/users', userRoute);
    app.use('/', homeRoute);
}

module.exports = route;