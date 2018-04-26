module.exports = function (app) {
    
    var Hello = {
        
        void: function (req) {
            response.redirect('/index');
        },
        index: function (request, response) {
            response.render('index');
        }
    }
}