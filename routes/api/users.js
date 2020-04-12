const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');


// @route POST api/user
// @desc  Register User
// @access public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Enter a password with 6 characters or more').isLength({ min: 6})
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    res.send('User route');
});

module.exports = router;