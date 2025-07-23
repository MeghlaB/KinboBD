import { User } from '../models/User.js';

export const allusers = async (req, res) => {
  try {
    const users = await User.find();
     console.log("Users fetched:", users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server Error" });
  }
};
