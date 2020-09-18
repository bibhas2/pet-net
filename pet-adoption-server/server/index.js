var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var dao = require("./data_access");

var app = express();

app.use(bodyParser.json()); //Parse JSON body
app.use(cors()) //Enable CORS

// all pets
app.get("/pet", function(req, res) {
  var list = dao.getInventory();
  res.send(list);
});

//update favorite
/*
curl -H'Content-type:application/json' -d '{"favorite":true}' -X PUT http://localhost:3000/pet/P004/favorite
*/
app.put("/pet/:petId/favorite", function(req, res) {
  res.header('Content-Type', 'application/json');

  if (req.params.petId === undefined || req.body === undefined) {
    res.statusCode = 500;
    res.end();

    return;
  }

  dao.updateFavorite(req.params.petId, req.body);
  res.send({});
});

console.log("Service endpoint base: http://localhost:3000/pet");

app.listen(3000);