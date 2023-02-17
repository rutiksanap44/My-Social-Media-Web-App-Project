const User = require('../model/user');
module.exports.profile = function (req, res) {
    return res.render('user', {
        title: "My Social"
    });
};

// redner sign up page
module.exports.signup = function (req, res) {
    return res.render('user_sign_up', {
        title: "My Social | Sign up"
    });
};

// render sign in page
module.exports.signin = function (req, res) {
    return res.render('user_sign_in', {
        title: "My Social | Sign in"
    });
};

// get the sign up data
module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    };
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding the user in signing up'); return };

        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in creating the user while signing up'); return };

                return res.redirect('/users/signin');
            });
        } else {
            return res.redirect('back');
        };
    });
};

// sign in and create session for the user
module.exports.createSession = function (req, res) {
    // steps to authenticate
    // find the user
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding the user and signing in'); return; };
        console.log(user);
        // handle user found
        if (user) {
            // handle password don't match
            if (user.password != req.body.password) {
                console.log('here2')
                return res.redirect('back');
            }
            // handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }
        else {
            // handle user not found
            console.log('here1')
            res.redirect('back');
        }
    });


}