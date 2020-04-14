const express = require('express');
const router  = express.Router();
const auth = require('../../middleware/auth');
const user = require('../../models/User')
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


// @route GET api/auth
// @desc Test Route
// @access public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json({ user })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
});

// @route POST api/user
// @desc  Authenticate User and get Token
// @access public
router.post(
    '/',
    [
      //validating fields
      check('email', 'Please enter a valid email').isEmail(),
      check('password', 'Password is required').exists()
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //user auth
      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email: email });
        if (!user) {
          return res.status(400).json({ errors: { msg: 'Invalid Credentials' } });
        }
        
  
        //comparing password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch) {
            return res.status(400).json({ errors: { msg: 'Invalid Credentials' } });
        }
        //payload for jsonwebtoken
        const payload = {
          user: {
            id: user.id,
          },
        };
        //jsonwebtoken for fetching data for ui
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 360000 },
          (error, token) => {
            if (error) throw error;
            res.json({ token });
          }
        );
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
      }
    }
  );

module.exports = router;

