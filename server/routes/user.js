const express = require('express');

const router = express.Router();


router.get('/user', (req, res) => {
    res.json({
        data: 'user api endpoint is just hit',
    });
});

module.exports = router;