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
    return 
}