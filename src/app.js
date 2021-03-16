const express = require('express')
const http = require('http')
const app = express()
const config = require('../config/environment.config')
const routes = require('./routes')

//Set config Port
const port = config.PORT || '9001'
app.set('port', port)

//Express no brings bodyParser by default 
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use(express.raw({ type: 'application/vnd.custom-type' }))
app.use(express.text({ type: 'text/html' }))

app.use('/', routes)

//Open Express Server
http.createServer(app)
    .listen(port)
    .on('error', onError)
    .on('listening', onListening)

//Http default Listeners
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    console.log('-> Running on port: ' + port)
}