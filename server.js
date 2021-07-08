import express from 'express';
import routes from './routes.js';
import path  from 'path';
const app  = express();


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve('./','public')));
app.use(express.static(path.resolve('./','node_modules')));
app.set('views', path.resolve('./','views'));
app.set('view engine','ejs')
app.use(routes);


app.listen(8000, () =>{
    console.log('http://127.0.0.1:8000')
})
