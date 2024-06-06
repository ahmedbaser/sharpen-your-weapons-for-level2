const express = require('express');
const { MongoClient, ServerApiVersion } = require("mongobd");
const { ObjectId } = require('mongodb');

//create an express instance


const uri ="mongodb+srv://acc:acc123@cluster0.hhohooc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const LocalURL ="mongodb://localhost:27017";



const app = express()

app.use(express.json())
app.use(express.raw())
app.use(express.text())

const client = new MongoClient(LocalURL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


  async function run() {
    try {
    
      await client.connect();
      
     const database = client.db("acc")
    //  create db  collections 
     const postCollection = database.collection('posts');
         app.get("/home", (req, res) => {
         res.sendFile(__dirname + "/index.html"); 
      });
        app.post("/create-post",async (req, res) => {
           const postData = req.body; 
           console.log(postData)
        //    const result = await postCollection.insertOne(postData)
        res.json({
            message: "Post created successfully",
            // data: result,
        })
        
        });
  

    }  finally {
      
        //   await client.close();
    }
}    
    run().catch(console.dir);




app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})