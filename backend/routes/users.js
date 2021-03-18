const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    const userList = await User.find().select('-password');

    if(!userList) {
      res.status(500).json({success: false})
    }
    res.send(userList);
  });


  router.get('/:id', async (req, res) => {
    const user = await (await User.findById(req.params.id).select('-password'));
  
    if(!user) {
      res.status(500).json({success: false})
    }
    res.send(user);
  });


router.post('/', async (req, res) => {
  let user = new User({
    charityName: req.body.chairtyName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    charityIdNumber: req.body.charityIdNumber,
    address: req.body.address,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    isCharity: req.body.isCharity,
    isVolunteer: req.body.isVolunteer,
    isAdmin: req.body.isAdmin
  })
  user = await user.save();

  if(!user)
  return res.status(400).send('the user cannot be created!')

  res.send(user);
});

module.exports = router;
