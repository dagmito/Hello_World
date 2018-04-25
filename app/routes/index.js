module.exports = function(app){

    app.get('/', function () {
        response.redirect('/index');
    });
    
    app.get('/index', function (request, response) {
        response.render('index');
    });
}