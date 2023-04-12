let fetch;
(async () => {
  fetch = await import('node-fetch');
  fetch = fetch.default;
})();
const { MongoClient } = require("mongodb");
const { ObjectId } = require('mongodb');
const nodemailer = require('nodemailer');
require("dotenv").config();
const { MONGO_URI, SENDGRID_APIKEY } = process.env;


const options = {
useNewUrlParser: true,
useUnifiedTopology: true,
};


  //
  //  THIS IS BEING SAVED FOR LATER, IT IS PURPOSEFULLY LEFT IN
  //

// const transporter = nodemailer.createTransport({
//     host: 'smtp.sendgrid.net',
//     port: 587,
//     auth: {
//       user: 'apikey',
//       pass: SENDGRID_APIKEY,
//     },
//   });

  //
  //  THIS IS BEING SAVED FOR LATER, IT IS PURPOSEFULLY LEFT IN
  //

  // const verifyEmail = async (req, res) => {
  //   const email = req.query.email;
  
  //   const client = new MongoClient(MONGO_URI, options);
  
  //   try {
  //     await client.connect();
  //     const db = client.db("db-name");
  //     const users = db.collection("users");
  //     const query = { email: email, email_verified: false };
  
  //     const result = await users.updateOne(query, { $set: { email_verified: true } });
  
  //     await client.close();
  
  //     if (result.matchedCount > 0) {
  //       res.status(200).json({ message: "Email verified successfully." });
  //     } else {
  //       res.status(404).json({ message: "User not found." });
  //     }
  //   } catch (err) {
  //     console.error("Error:", err);
  //     res.status(500).json({ message: "An error occurred while updating the user.", error: err });
  //   }
  // };


  //
  // POST FEEDBACK TO DUBS BUSINESS EMAIL
  //  THIS IS BEING SAVED FOR LATER. IT IS PURPOSEFULLY LEFT IN
  //

// const postQuestion = async (req, res) => {
//     const { question } = req.body;
  
//     try {
//       await transporter.sendMail({
//         from: 'stephen@dubsadvising.com',
//         to: 'stephen@dubsadvising.com',
//         subject: 'User Question',
//         text: `User feedback: ${question}`,
//       });
  
//       res.status(200).send({ message: 'Email sent successfully.' });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).send({ message: 'An error occurred while sending the email.', error: error });
//     }
//   };


const postQuestion = async (req, res) => {
  const { question } = req.body;

  const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db("db-name");
    const collection = db.collection("feedback");

    const result = await collection.insertOne({ question });

    res.status(201).json({ message: "Feedback saved successfully.", result });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "An error occurred while saving the feedback.", error: err });
  } finally {
    await client.close();
  }
};


  //
  // DELETE SPECIFIC USER BY USERID
  //

const deleteUser = async (req, res) => {
    let userId = req.params.userId;
    const client = new MongoClient(MONGO_URI, options)
    console.log(userId)
    const db = client.db('db-name');
    try {
        await client.connect();
        console.log('Are you even trying my guy?')
        const usersCollection = db.collection('users');
        if (typeof userId === 'string') {
            userId = new ObjectId(userId);
        }
        const result = await usersCollection.deleteOne({ _id : userId })
        console.log(result)
        if (result.deletedCount === 1) {
        res.status(200).send({ message: 'User deleted successfully' });
        console.log(result)
        } else {
        res.status(404).send({ message: 'User not found' });
        console.log(result)
        }
    } catch (err) {
        console.error(err.message);
        console.error(err.stack);
        res.status(500).send({ message: 'An error occurred while deleting the user', error: err });
    } finally {
        await client.close();
    }
};


  //
  // GET LIST OF ALL DUBS USERS
  //

const getUsers = async (req, res) => {
    console.log(MONGO_URI);
    const client = new MongoClient(MONGO_URI, options);
    console.log('Hello')
    try {
        await client.connect();
        const db = client.db('db-name');
        console.log('Are you even trying my guy?')
    const test = await db.collection("users").find().toArray();
    console.log(test);
    res.status(200).json(test)
    } catch(err) {
        console.log('error')
    }
}


module.exports = { deleteUser, getUsers, postQuestion }

