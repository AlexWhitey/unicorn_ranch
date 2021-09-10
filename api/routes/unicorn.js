const fs = require('fs');
const express = require('express');
const router = express.Router();

let data = JSON.parse(fs.readFileSync('unicorns.json'), 'utf8');


router.get("/", function(req, res, next) {
    res.send(data);
})

router.post("/", function(req, res, next) {
    let data = JSON.stringify(req.body);
    console.log('data', data, typeof(data));
    fs.writeFile('unicorns.json', data, (err) => {
        if (err) console.log('err', err);
        console.log('Written to the file');
    })
    // res.status(200)
})

module.exports = router;