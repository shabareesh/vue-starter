const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.listen(port);
console.log('Server started! At http://localhost:' + port);
const users = [
    {id: 1, windSpeed: '1', currentSpeed: '1', swellHght: '1', seaHght: '1', status: 'lock'},
    {id: 2, windSpeed: '2', currentSpeed: '2', swellHght: '2', seaHght: '2', status: 'lock'},
    {id: 4, windSpeed: '4', currentSpeed: '4', swellHght: '4', seaHght: '4', status: 'unlock'},
    {id: 5, windSpeed: '5', currentSpeed: '5', swellHght: '5', seaHght: '5', status: 'lock'}
];

app.get('/api/weatherList', function(req, res) {
    res.send(users);
});

app.post('/api/addWeather', function(req, res) {
    users.push(req.body);
    setTimeout((function() {res.send('Add a weather')}), 2000);
});