var Sequelize = require('sequelize');

var db = new Sequelize('demo','postgres','password',{dialect :'postgres'});

db
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = db;