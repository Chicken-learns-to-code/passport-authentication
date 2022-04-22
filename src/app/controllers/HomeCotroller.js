const { mutipleMongooseToObject } = require('../../util/mongoose');
const Product = require('../models/Product');
class HomeController {
    //GET HOME:
    index(req, res, next) {
        Product.find({}) 
            .then(products => {
                res.render('body',{
                    user: req.user,
                    products
                });
                
            }).catch(next);
       
    }
    
}
module.exports = new HomeController;