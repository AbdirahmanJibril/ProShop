import express from 'express'
const router = express.Router()

import {
  authUser,
  registerUser,
  userProfile,
<<<<<<< HEAD
  updateUserProfile,
=======
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// Register a new user
router.post('/', registerUser)
// user login route
router.post('/login', authUser)
//user profile route
<<<<<<< HEAD
router
  .route('/profile')
  .get(protect, userProfile)
  .put(protect, updateUserProfile)
=======
router.route('/profile').get(protect, userProfile)
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8

export default router
