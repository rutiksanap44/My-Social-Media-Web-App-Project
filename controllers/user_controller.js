const User = require('../model/user');
module.exports.profile = function(req,res){
    return res.render('user',{
        title : "My Social"
    });
};

// redner sign up page
module.exports.signup = function(req,res){
    return res.render('user_sign_up',{
        title : "My Social | Sign up"
    });
};

// render sign in page
module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title : "My Social | Sign in"
    });
};

// get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        console.log("here");
        return res.redirect('back');
    };
    User.findOne({email: req.body.email}, function(err,user){
        if(err){console.log('error in finding the user in signing up'); return};

        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('error in creating the user while signing up'); return};

                return res.redirect('/users/signin');
            });
        }else{
            return res.redirect('back');
        }
    })

}