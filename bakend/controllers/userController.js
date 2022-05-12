import asyncHandler from 'express-async-handler'
import { User } from '../models/usermodel.js'
import generateToken from '../utils/jsonwebtoken.js'
import bcrypt from 'bcryptjs'

<<<<<<< HEAD
//POST method, User register, api/users/
=======
// User register
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400)
    throw new Error('user already exist')
  }

  const user = await User.create({
    name,
    email,
    password,
  })
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('user data invalid')
  }
})
<<<<<<< HEAD

// POST method, USER login,  api/users/login
=======
// POST api/user/login
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Not authorised email or password invalid')
  }
})

// GET method, get user profile, api/users/profile

const userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  }
<<<<<<< HEAD
})

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    ;(user.name = req.body.name || user.name),
      (user.email = req.body.email || user.email)

    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('Error User Not Found')
  }
})
export { authUser, registerUser, userProfile, updateUserProfile }
=======
})
export { authUser, registerUser, userProfile }
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8
