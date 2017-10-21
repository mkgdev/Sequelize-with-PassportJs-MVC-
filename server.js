require('./utils/rootRequire')();
require('./utils/prodEnv')();

let express = require('express');
let http = require('http');
let Router = rootRequire('app/Router');
let app = express();
let server = http.createServer(app);




//*******

/**
 * MIDDLEWARE
 ********************* */
require('./config/middleware')(app, express);


//******************************
//  Router configuration
//*******************************

Router.forEach((route)=>{
   app.use(route.path, route.handler);

});


server.listen(8080);
console.log('Server listening on 8080');