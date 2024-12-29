const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Sign up route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  
  try {
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

// Login route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).json(info);
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  })(req, res, next);
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send('Logout failed');
    }
    res.send('Logged out successfully');
  });
});

module.exports = router;
