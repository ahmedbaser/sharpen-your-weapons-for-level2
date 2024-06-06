const express = require('express')
const app = express()
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const port = 5000

// mongoess schema 
// Schema(Blueprint) --> Model(prototype)--> real data
const todoSchema = new mongoose.Schema({
  todo: {
    type: "String",
    required: true
  },
  priority: {
   type:"String",
   enum: ["high", "medium","low"],
   required: true,
  },
  isComplete: {
   type: Boolean,
   required: true,
  }
});


const Todo = mongoose.model("Todo", todoSchema);

const userschema = new mongoose.Schema({
 name: {
  type: "String",
  required: true,
 },
 email: {
  type: "String",
  required: true,
 },
 password: {
  type: "String",
  required: true,

 },
});

const User = mongoose.model("User", userschema);

app.use(express.json())
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://todo-user:todouser@cluster0.hhohooc.mongodb.net/todo_db?retryWrites=true&w=majority&appName=Cluster0";



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
  
    await mongoose.connect(uri);
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // const todosCollection = client.db("todoDB").collection("todos");
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    app.get("/todos", async(req, res, next)=> {
           console.log("ami majkanar callback function");
           console.log(req.headers);
           const token = req.headers.authorization;
           const privateKey = "secret";
           const verifiedtoken = jwt.verify(token,privateKey);
           console.log(verifiedtoken);
           if(verifiedtoken) {
            next();
           } else {
            res.send("You are not authorized")
           }
          
    }, 
    async(req, res, next)=> {
     console.log("ami porar callback function");
     next();
    },
    async (req, res) => {
      // const todos = await todosCollection.find({}).toArray()
      const todos = await Todo.find({});
   
      res.send(todos);
    });



    app.get("/todo/:id", async(req, res)=> {
      const id = req.params.id;

      const todos = await Todo.findById(id);
          // findById and findOne is little bit diffrent 
      // const todos = await Todo.findOne({
      //   // _id: id,
      //   todo: "New Todo 2",
      // });
      res.send(todos);
    });



    app.post("/todo", async(req, res) => {
    
      const todoData = req.body;
      // option-1
      // const todo = new Todo(todoData); 
      // todo.save();
      const todo = await Todo.create(todoData);
  
    // option-2
      console.log(todo);
      res.send(todo)
    });

    // put/patch 
   app.patch("/todo/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body; 
      const todos = await Todo.findByIdAndUpdate(id, updatedData, {
        new:true,
      });
      res.send(todos);

    })

  app.delete("/todo/:id", async (req, res) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.send("Deleted successfully");
  })
  // register 
  app.post("/register", async (req, res) => {
    const userData = req.body;
    const todo = await User.create(userData);
    console.log(todo);
    res.send(todo);
  })


  // Login
  app.post("/login", async (req, res) => {
    const {email, password} = req.body;
      const user = await User.findOne({
      email, 
      password,
    });
    
    if(user) {
      const playload = {
       name: user.name,
       email: user.email,
      };
      const privateKey = "secret"
      const expirationTime = "10s"  
      const accesstoken = jwt.sign(playload, privateKey, {
        expiresIn: expirationTime,
      });


      const userReponses = {
        message: "looged In sussessfully",
        data:  {
          accesstoken,
        }
      };
      res.send(userReponses);  
    } else {

      // console.log(todo);
      res.send("Email or Password Incorrect");
    }
  });



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})