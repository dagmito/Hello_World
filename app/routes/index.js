module.exports = function (app) {
    
    controller = app.controller.hello;

    app.get('/', controller.void);
    app.get('/index', controller.index);

}