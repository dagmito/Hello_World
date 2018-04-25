const app = require('./config/cfg')();
const route = require('./app/routes')(app);

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Server rodando");
});