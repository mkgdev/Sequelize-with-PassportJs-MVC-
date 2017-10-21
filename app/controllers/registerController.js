var User = require('../models/user.js');
var bcrypt = require('bcrypt');




module.exports = {
    register :{
        get : (req,res)=> {

            res.render('register');

    },

    post : (req,res)=>{
            console.log('post routes');

            var user ={

                 username : req.body.username,
                 password : req.body.password
            };

    // Saving User registration data to database with hashed password
            User.hashPassword(user).then((hash)=>{User.create({username:user.username, password:hash})

            .then((result)=>{

                var user = result.dataValues;
                req.login(user, function(err)
                    {

                        if(err) throw err;
                        res.redirect('/');
                    }

                );

            })

            })
                .catch((err)=>console.log('error'));





}

}

}