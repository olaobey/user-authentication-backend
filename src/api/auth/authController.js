const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

// dotenv
require('dotenv').config();

const register = async (req, res) => {
    const { username, password } = req.body;
    try{
        // Check if the user already exists
    const existingUser = await User.findOne({ username }).exec();
    if (existingUser) {
      return res.status(400).json({
        message: 'Username already exists',
        success: false,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
        username,
        password: hashedPassword,
      });

      await user.save();

     return res.status(201).json({
        message: 'Account successfully created',
        success: true,
      });

    } catch (error){
        res.status(500).json({
            error: error.message,
            message: 'Server error',
            success: false,
          });
    }

  }
    const login = async (req, res) => {
      const { username, password } = req.body;
      try {
        // Check if the user exists
        const foundUser = await User.findOne({ username: username})
          .select('+password')
          .exec();
        if (!foundUser) {
          return res.status(401).json({
            message: 'Unauthorized',
            success: false,
          });
        }
       
        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, foundUser.password);
        if (!isPasswordValid) {
          return res.status(401).json({
            message: 'Invalid credentials',
            success: false,
          });
        }
    
        // Generate JWT token with login status
        const accessToken = jwt.sign(
          {
            UserInfo: {
              userId: foundUser._id,
              username: foundUser.username,
              email: foundUser.email,
              updatedAt: Date.now(),
              new: true,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '15m' }
        );
    
        const refreshToken = jwt.sign(
          {
            username: foundUser.username,
          },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: '7d' }
        );
    
        const result = await foundUser.save();
    
        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
          maxAge: 24 * 60 * 60 * 1000,
        });
    
        // Successful login
        return res.status(200).json({
          accessToken,
          result,
          message: 'Login is successful',
          success: true,
        });
      } catch (error) {
        res.status(500).json({
          message: 'Server error',
          error: error.message,
          success: false,
        });
      }
    };
    
  
    module.exports = {
      register,
      login
  }
  