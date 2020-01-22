const express = require('express')
const bodyParser = require('body-parser')
const secret = require('./config').secret
const app = express()

const mysql = require('mysql');

// require('./models/User')
// require('./models/Article')
// require('./models/Comment')
require('./config/passport')

app.set('token', secret)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./routes'))

/*const connection = mysql.createConnection({
    host: 'localhost',
    user: 'paul',
    password: 'Control123!',
    database: 'agetic'
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });*/

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const server = app.listen( process.env.PORT || 3000, function(){
    console.log('Listening on port ' + server.address().port);
});
