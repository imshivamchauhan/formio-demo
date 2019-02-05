var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/formio-demo';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/formiodemoclient', express.static(__dirname + '/dist'));

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    app.get('/api/ng', (req, res) => {
        db.collection('formsng').find({}).toArray(function (err, result) {
            if (err) throw err;
            // result = JSON.stringify(result);
            res.send(result);
        });
    });
    app.get('/api/js', (req, res) => {
        db.collection('formsjs').find({}).toArray(function (err, result) {
            if (err) throw err;
            // result = JSON.stringify(result);
            res.send(result);
        });
    });
    app.post('/api/ng', (req, res) => {
        db.collection('formsng').insertOne(req.body, function (finderr, result) {
            if (finderr) {
                throw finderr;
            }
            res.send({ message: 'Saved' });
        });

    });

    app.post('/api/js', (req, res) => {
        db.collection('formsjs').insertOne(req.body, function (finderr, result) {
            if (finderr) {
                throw finderr;
            }
            res.send({ message: 'Saved' });
        });

    });
});

app.get(/^\/(formiodemo)(\/|$)/, (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.use(/^\/(\/|$)/, (req, res) => {
    res.redirect('/formiodemo');
});

app.listen(5000, function () {
    console.log("server started on port : " + 5000);
});
process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1)
});