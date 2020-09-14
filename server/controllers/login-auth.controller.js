const { validationResult } = require('express-validator');

const User = require('../models/User/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginAuth = async (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json([{ msg: 'Invalid credentials' }]);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json([{ msg: 'Invalid credentials' }]);
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).send('Server error.');
  }
};

module.exports = loginAuth;
