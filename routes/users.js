const express = require('express');
const router = express.Router();


let users = [
  {username: 'Emilia', password: 'merlin', id: 0},
  {username: 'Hayden', password: 'anakin', id: 1},
  {username: 'Sid', password: 'wilson', id: 2}
];

/* GET users listing. */

router.get('/', function(req, res) {
  res.json(users);
});

router.post('/login', function(req, res, next) {
  const {username, password} = req.body;
  const foundUser = users.find(user => user.username === username);

  if(password === foundUser.password) {
    res.status(201).json({username: foundUser.username, id: foundUser.id});
  } else {
    res.status(401).json('Incorrect password or username');
  }

});

module.exports = router;
