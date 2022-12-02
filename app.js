const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const bodyParser = require('body-parser');
require('dotenv').config()
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./server/routes/userRoutes');
const movieRoutes = require('./server/routes/movieRoutes');
const screenRoutes = require('./server/routes/screenRoutes');
const showRoutes = require('./server/routes/showRoutes');

const PORT = 3001;

mongoose.connect("mongodb+srv://rafay:" + "Rafay1234" + "@webdevproject.3vkytvn.mongodb.net/?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});



app.get("/", (req, res, next) => {
    res.status(200).json({
        message: 'Home'
    })
    next();
});
app.use("/user", userRoutes);
app.use("/movies", movieRoutes);
app.use("/screen", screenRoutes);
app.use("/show", showRoutes);


app.use((req, res, next) => {
    const error = new Error();
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: `hello ${error.message}`
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;