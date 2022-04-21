const homeRoute = require('./home');
const userRoute = require('./users');
function route(app) {  
    app.use('/',homeRoute);
    app.use('/users',userRoute);
}

module.exports = route;