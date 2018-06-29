// Chargement des dépendances
const express    = require('express'),
      bodyParser = require('body-parser'),
      winston    = require('winston');

// Création de l'application express
let app = module.exports = express();

// Configuration de body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Gestion des données entrantes
app.post('/data', (req, res, next) => {
    winston.info(req.body);
    return res.sendStatus(201);
})