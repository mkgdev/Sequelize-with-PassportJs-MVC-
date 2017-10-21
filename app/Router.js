module.exports = [

    {
        path: '/',
        handler:rootRequire('app/routes/indexRoutes')
    },
    {
        path : '/',
        handler:rootRequire('app/routes/registerRoutes')
    },
    {
        path :'/',
        handler : rootRequire('/app/routes/loginRoutes')
    }

];