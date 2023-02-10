module.exports.home = function(req,res){
    return res.render('client',{
        title : "My Social"
    });
};