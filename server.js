const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 6200;


const bodyParser = require('body-parser');
const server = require('http').Server(app);
const morgan = require('morgan');



//cross-orgin
var clientPort = ['https://bbproviderwebapp.azurewebsites.net','*']//
var corsOptions = {
  origin: function (origin, callback) {
    if (clientPort.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(morgan('dev'));
app.use(cors())

// support parsing of application/json type post data
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// Web Application route
const Auth = require('./routers/authRoute');


// Web Application route use
app.use('/Care', Auth);


// define a simple route
app.get('/', (req, res) => {
  res.json({"message": "default router"});
});



app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            statuscode: error.message
        }
    });
});

  
server.listen(port)