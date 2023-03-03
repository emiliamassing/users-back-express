const express = require('express');
const router = express.Router();


let users = [
  {username: 'Emilia', password: 'merlin'},
  {username: 'Hayden', password: 'anakin'},
  {username: 'Sid', password: 'wilson'}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Login');
});

module.exports = router;
