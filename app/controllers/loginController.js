var passport = require('passport');



module.exports = {

    index: {
        get : (req,res)=>{ res.render('login')},

        post :  passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login' })



},

}

