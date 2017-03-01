// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const citationSchema = new mongoose.Schema({
  citation: String,
  clientUserName: String,
  bluebookUserName: String,
  cartStatus: String,
  orderStatus: String,
  citeStatus: String,
  closedStatus: String,
});

// create mongoose model
const Citation = mongoose.model('Citation', citationSchema);

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET all citations. */
router.get('/citations', (req, res) => {
    Citation.find({}, (err, citations) => {
        if (err) res.status(500).send(error)

        res.status(200).json(citations);
    });
});

/* GET one users. */
router.get('/citations/:id', (req, res) => {
    Citation.findById(req.param.id, (err, citations) => {
        if (err) res.status(500).send(error)

        res.status(200).json(citations);
    });
});

/* Create a citation. */
router.post('/citations', (req, res) => {
    let citation = new Citation({
        name: req.body.name,
        age: req.body.age,
        citation: req.body.citation,
        clientUserName: req.body.clientUserName,
        bluebookUserName: req.body.bluebookUserName,
        cartStatus: req.body.cartStatus,
        orderStatus: req.body.orderStatus,
        citeStatus: req.body.citeStatus,
        closedStatus: req.body.closedStatus,
    });

    citation.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Citation created successfully'
        });
    });
});

module.exports = router;
