const fs = require('fs');
const express = require('express');
const router = express.Router();

let data = JSON.parse(fs.readFileSync('unicorns.json'), 'utf8');


router.get("/", function(req, res, next) {
    res.send(data);
});

module.exports = router;