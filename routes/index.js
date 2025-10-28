const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Baluku You Made It!');
});

module.exports = router;