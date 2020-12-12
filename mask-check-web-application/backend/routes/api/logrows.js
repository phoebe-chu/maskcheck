const express = require('express');
const router = express.Router();

// Load LogRow model
const LogRow = require('../../models/LogRow');

// @route GET api/logrows/test
// @description tests logrow route
// @access Public
router.get('/test', (req, res) => res.send('mask log route testing!'));

// @route GET api/logrows
// @description Get all entries on the mask log
// @access Public
router.get('/', (req, res) => {
  LogRow.find()
    .then(logrows => res.json(logrows))
    .catch(err => res.status(404).json({ logrowsfound: 'No Masklogs found' }));
});

// // @route POST api/logrows
// // @description add/save logrow entry
// // @access Public
router.post('/', (req, res) => {
  LogRow.create(req.body)
    .then(logrow => res.json({ msg: 'LogRow added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this logrow' }));
});


module.exports = router;