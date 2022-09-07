const express = require("express");
const app = express();


 const PORTA = process.env.PORT || 8081;
 app.listen(PORTA,function(){
     console.log('Servidor rodando na porta 8081');
 });

 
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


 app.set('views',__dirname+'/views');
 app.set('view engine','pug');


app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/mask', express.static('./node_modules/jquery-mask-plugin/dist'));
app.use('/publico', express.static(__dirname + '/publico'));


 app.get('/',function(req, res){
    res.render('inicio');
});



app.get('/Quemsomosnos',function(req, res){
    res.render('qsn');
});
app.get('/volei',function(req, res){
    res.render('volei');
});

