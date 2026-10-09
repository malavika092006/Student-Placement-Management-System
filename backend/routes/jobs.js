const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, title: 'Software Engineer', company: 'TCS' }]);
});

router.post('/', (req, res) => {
  res.json({ message: 'Job Added', job: req.body });
});

module.exports = router;