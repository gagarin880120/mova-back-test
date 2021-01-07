const express = require('express');
const todos = require('./todos');

const router = express.Router();

// eslint-disable-next-line func-names
router.get('/todos', function (req, res) {
  res.json(todos);
});

module.exports = router;
