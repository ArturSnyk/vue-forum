const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const {notFound, errorHandler} = require('./middlewares');

const app = express();

app.use(logger('dev'));
//TODO check what's that
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes here
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the 🧟‍🧟‍ API'});
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
