import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);
let usersCollection;

async function connectDB() {
  try {
    await client.connect();
    usersCollection = client.db("kinboDB").collection("users");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

// Connect to DB when server starts
connectDB();

// User Registration Endpoint
app.post("/users", async (req, res) => {
  try {
    const userData = req.body;
    
    if (!userData.email) {
      return res.status(400).send({ message: "Email is required" });
    }

    const existingUser = await usersCollection.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(200).send({ 
        message: "User already exists", 
        insertedId: null 
      });
    }

    const result = await usersCollection.insertOne(userData);
    res.status(201).send({
      message: "User created successfully",
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await usersCollection.find().toArray();
    console.log(users)
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});
// Example Express route
app.get('/users/role', async (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).send({ message: 'Email is required' });
  }
  try {
    // your DB query to find user by email
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    // Return the role or user object
    res.send({ role: user.role });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});