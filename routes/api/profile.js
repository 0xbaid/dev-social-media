const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');


// @route GET api/profile/me
// @desc GET current user profile
// @access private

router.get('/me', auth, async (req, res) => {
  try {
      const profile = await Profile.findOne({ user: req.user.id }).populate('user', [ 'name', 'avatar' ]);
      if(!profile){
        return res.status(400).json({ msg: 'User not found'})
      }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/profile
// @desc Create and update profile
// @access private
router.post('/', [ auth, [
  check('status', 'Status is required').not().isEmpty(),
  check('skills', 'Skills are required').not().isEmpty()
]], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  

  const {
    company,
    location,
    website,
    bio,
    skills,
    status,
    githubusername,
    youtube,
    twitter,
    instagram,
    linkedin,
    facebook
  } = req.body;


});

module.exports = router;
