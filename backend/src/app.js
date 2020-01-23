import express  from 'express'
import bodyParser from 'body-parser'
import { config } from './config'
import router from './routes'

const { secret } = config
const app = express()

// require('./models/User')
// require('./models/Article')
// require('./models/Comment')
require('./config/passport')

app.set('token', secret)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router)

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const server = app.listen( process.env.PORT || 3000, function(){
    console.log('Listening on port ' + server.address().port);
});
