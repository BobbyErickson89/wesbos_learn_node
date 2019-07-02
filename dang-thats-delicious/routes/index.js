const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const bobby = {name: 'Bobby', age: 100, cool: true};
  res.json(bobby);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);

});

module.exports = router;
