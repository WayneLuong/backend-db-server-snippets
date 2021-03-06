const express = require('express');
const router = express.Router();

// api request - post / put / delete
// full url from server.js - api/users/test

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res)=>{
    //similar to res.send but sends json data for usew
    res.json({msg: "Profile is working"})
});

module.exports = router;