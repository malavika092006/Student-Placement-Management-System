const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: 'User Registered Successfully' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login Successful', user: req.body });
});

module.exports = router;