class HomeController {
    //GET HOME:
    index(req, res, next) {
        res.render('body',{
            user: req.user
        });
    }
    
}
module.exports = new HomeController;