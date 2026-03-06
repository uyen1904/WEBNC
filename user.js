// const express = require('express');
// const router = express.Router();
// const { MongoClient } = require('mongodb');

// const client = new MongoClient("mongodb://127.0.0.1:27017");

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     await client.connect();
//     const db = client.db("FashionData");
//     const userCollection = db.collection("user");
    
//     const user = await userCollection.findOne({ username, password });
//     if (user) {
//       res.json({ success: true, message: 'Login successful' });
//     } else {
//       res.json({ success: false, message: 'Invalid username or password' });
//     }
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// module.exports = router;