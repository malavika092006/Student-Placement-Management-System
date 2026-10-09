const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  res.json({ message: 'Application Submitted', data: req.body });
});

module.exports = router;