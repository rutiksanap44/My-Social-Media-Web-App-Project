module.exports.profile = function(req,res){
    return res.render('user',{
        title : "My Social"
    });
};

module.exports.signup = function(req,res){
    return res.render('user_sign_up',{
        title : "My Social | Sign up"
    });
};
module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title : "My Social | Sign in"
    });
};