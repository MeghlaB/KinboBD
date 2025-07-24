// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

// .env config
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://hospital-managment-d7e21.web.app",
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  })
);
app.use(express.json());

// MongoDB config
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u2fu7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const usersCollection = client.db("KinboBD").collection("users");
    
   // users post collection api
    app.post("/users", async (req, res) => {
      const userData = req.body;
    
      const query = { email: userData.email };
      const exitingUser = await usersCollection.findOne(query);
      if (exitingUser) {
        return res.send({ message: "user already exits", instertedId: null });
      }
      const result = await usersCollection.insertOne(userData);
      console.log(result)
      
      res.send(result);
    });
    // app.post("/users", async (req, res) => {
    //   const userData = req.body;
    
    //   const query = { email: userData.email };
    //   const exitingUser = await usersCollection.findOne(query);
    //   if (exitingUser) {
    //     return res.send({ message: "user already exits", instertedId: null });
    //   }
    //   const result = await usersCollection.insertOne(userData);
      
    //   res.send(result);
    // });

    // user get collection api
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
   
      res.send(result);
    });



    // GET /role?email=test@example.com
// Assuming you're using Express and have usersCollection ready
// route: /users/role
app.get("/users/role", async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).send({ message: "Email is required" });
  }

  try {
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});








  } finally {
    // do nothing for now
  }
}
run().catch(console.dir);

// Routes
app.get("/", (req, res) => {
  res.send("Loading..........");
});

// Listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
