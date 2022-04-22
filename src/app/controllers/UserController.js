const User = require('../models/User');
const passport = require('passport');
const bcrypt = require('bcryptjs/dist/bcrypt');

class UserController {
  //GET /users/login
  login(req, res, next) {
    res.render("login");
  }
  //GET /users/register
  register(req, res, next) {
    res.render("register");
  }
  //POST /users/register
  registerPost(req, res, next) {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }

    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        email,
        password,
        password2
      });
    } else {
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            email,
            password
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                  res.redirect('/users/login');
                })
                .catch(console.log(err));
            });
          });
        }
      });
    }
  }
  //POST /users/login
  loginPost(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);

  }
  //GET /users/logout
  logout(req, res, next) {
    req.logout();
    req.flash('success_msg' ,'You are logged out');
    res.render('login');
  }
}
module.exports = new UserController;