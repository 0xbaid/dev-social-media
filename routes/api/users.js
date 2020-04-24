const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// @route POST api/users
// @desc  Register User
// @access public
router.post(
  '/',
  [
    //validating fields
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Enter a password with 6 characters or more').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //user registration
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ errors: { msg: 'User already exists' } });
      }
      // Fetching gravatar
      const avatar = gravatar.url(email, {
        s: 200,
        r: 'pg',
        d: 'mm',
      });

      //instantiating user
      user = new User({ name, email, password, avatar });

      //hashing password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      //saving user after hashing
      await user.save();

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
