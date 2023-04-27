const express  = require('express');

const cors = require('cors');

const API_PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/api', function(req, res) {
    console.log('called');
    res.send({result: "Hi from the server"})
});

app.get('/quit', function(req, res) {
    console.log('called quit');
    res.send({result: "bye from the server"})
});



app.listen(API_PORT, () => console.log(`listening on port: ${API_PORT}`));