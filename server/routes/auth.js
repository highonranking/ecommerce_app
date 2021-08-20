const express = require('express');

const router = express.Router();


router.get('/create-or-update-user', (req, res) => {
    res.json({
        data: '/create-or-update-user api endpoint is just hit',
    });
});

module.exports = router;