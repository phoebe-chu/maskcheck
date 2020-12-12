const express = require('express');
const router = express.Router();

// Load Login model
const Login = require('../../models/Login');

// @route GET api/login/test
// @description tests login route
// @access Public
router.get('/test', (req, res) => res.send('mask login route testing!'));

// @route GET api/login/
// @description Get all login info
// @access Public
router.get('/', (req, res) => {
  Login.find()
    .then(login => res.json(login))
    .catch(err => res.status(404).json({ loginfound: 'No Login found' }));
});

// @route GET api/login/:email
// @description Get the account info of a single user by email
// @access Public
router.get('/:email', (req, res) => {
  Login.find({email:req.params.email})
    .then(login => res.json(login))
    .catch(err => res.status(404).json({ nologinfound: 'No account under email found' }));
});



module.exports = router;