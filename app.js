const express = require('express')
const app = express()
const port = 1000
const cors = require('cors')
const session = require('express-session')
const mongoose = require('mongoose');
const api = require('./routes/api')
const flash = require('connect-flash');

//bodrparser
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(cors());

const fileUpload = require("express-fileupload");
const cloudinary = require('cloudinary');
app.use(fileUpload({useTempFiles: true}));




// parse application/json
app.use(bodyParser.json())

//message
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    
  }));
  app.use(flash());

//api routing
//api routing
app.use('/api',api)
//localhost:3000/api

// database connection
const connectdb = require('./db/connectdb')
connectdb()

//static file setup
app.use(express.static('public'))

//server
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})