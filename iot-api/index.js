// Chargement des dépendances
const util    = require('util'),
      winston = require('winston'),
      app     = require('./app');

// Definition du port de l'API
let port   = process.env.PORT || 1337;

// Exécution de l'API
app.listen(port, function(){
    winston.info(util.format("server listening on port %s", port));
});