import express from 'express';

// route.get('/subscription', (req, res) => res.render('subscription'));
export default (()  => {

    const route = express.Router();
    route.get('/', (req, res) =>{
        res.render('index')
    })

    return route;
})()
