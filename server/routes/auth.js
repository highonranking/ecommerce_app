const express = require('express');

const router = express.Router();

// middlewares
const {authCheck} = require('../middlewares/auth');

// controllers

const { createOrUpdateUser } = require('../controllers/auth');
const { auth } = require('firebase-admin');

router.post('/create-or-update-user', authCheck,  createOrUpdateUser);

module.exports = router;