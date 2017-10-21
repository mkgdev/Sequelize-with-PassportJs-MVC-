var db =  require('../../config/db.js');
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

var User = db.define('user',{

    username : Sequelize.STRING,
    password : Sequelize.TEXT,

});
User.generateSalt = function(){          // function to generate salt

    const saltRound =8;
    return new Promise(function(resolve,reject){
    bcrypt.genSalt(saltRound,function(err,salt)
        {
            if(err)
                reject(err);
            else
                resolve(salt);

        });

}

    );

}

User.hashPassword = function(user){           //function to hash password

    return new Promise(function(resolve,reject){
        User.generateSalt().then((salt)=>{

            bcrypt.hash(user.password,salt,function(err,hash){

                if(err)
                    reject(err);
                else {

                    resolve(hash);
                }

            }


        );

    }).catch((err)=>{console.log(err);});

    });

}


db.sync();

module.exports = User;
