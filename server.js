var express               = require('express'),
    app                   = express(),
    incidenciasController = require('./server/controllers/inicidencias.controller'),
    mongoose             = require('mongoose'),
    bodyParser            = require('body-parser');

mongoose.connect('mongodb://localhost:27017/incidentReporter');

app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html')
});

app.use('/', express.static(__dirname + '/client'));

//REST api
app.post('/api/incidencias', incidenciasController.create);
app.get('/api/incidencias', incidenciasController.index);
app.get('/api/incidencias/:id', incidenciasController.show);
app.put('/api/incidencias/:id', incidenciasController.upsert);
app.delete('/api/incidencias/:id', incidenciasController.destroy);

app.listen(3000, function () {
    console.log('I\'m listening on port 3000...');
});