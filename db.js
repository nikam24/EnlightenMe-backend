const mongoose = require('mongoose');

const url = "mongodb+srv://2020bcs028:pratham@cluster0.ryn8mtr.mongodb.net/";

module.exports.connect = () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to Database");
        })
        .catch((err) => {
            console.log("Not Connected to Database ERROR! ", err);
        });
}