const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8080;
const db = require('./db');
const router = require('./routes');

// Database connection
db.connect();

// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Cors
app.use(cors());

// Routes
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, './build')));

app.use('/api', router);

app.get("*", (req, res) => {
    try {
        res.setHeader("Content-Type", "text/html");
      res.sendFile(path.join(__dirname, "./build/index.html"));
    } catch (err) {
      console.log(err);
    }
  });

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running on port: 8080');
})