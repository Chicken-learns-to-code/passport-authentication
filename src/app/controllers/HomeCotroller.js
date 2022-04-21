class HomeController {
    //GET HOME:
    index(req, res, next) {
        res.render('body');
    }
}
module.exports = new HomeController;