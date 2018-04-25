var app = require('express')();
var consign = require('consign');

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign({
    cwd: 'app',
    locale: 'pt-br',
    extensions: [ '.js', '.json', '.node' ],
    verbose: false
})
  .include('infra')
  .then('routes')
  .into(app);

module.exports = function () {
    return app;
};