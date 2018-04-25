const app = require('./config/cfg')();
const route = require('./app/routes')(app);

app.listen(3000, function(){
    console.log("Server rodando");
});