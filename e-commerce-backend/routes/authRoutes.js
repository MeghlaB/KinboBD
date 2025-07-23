// routes/authRoutes.js
import express from 'express';
import { User } from '../models/User.js';
import { allusers } from '../controllers/usersController.js';

const router = express.Router();

router.post('/api/save-user', async (req, res) => {
  const { uid, name, email, photoURL } = req.body;

  try {
   
    let user = await User.findOne({ uid });
    if (!user) {
     
      user = new User({
        uid,
        name,
        email,
        image: photoURL,
      });
      await user.save();
    }
    res.status(200).json({ message: 'User saved successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/users',allusers)


export { router as authRoutes };
