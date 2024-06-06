const http = require('node:http');
const { title } = require('node:process');
const { json, buffer } = require('stream/consumers');
const url = require('url');
const fs = require('fs');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri ="mongodb+srv://acc:acc123@cluster0.hhohooc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const LocalURL ="mongodb://localhost:27017";



 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
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



         const server = http.createServer((req, res) => {
         console.log(req.url, req.method) 
         const parsedURL = new URL(req.url, `http://${req.headers.host}`);
         const pathName = parsedURL.pathname;
         const method = req.method;
        if(pathName ==='/home' && method ==='GET') {
        fs.readFile(__dirname +  '/index.html', 'utf-8', (err, data) => {
                if(err) {
                    throw new Error('Error! readig file!')
                }
                res.setHeader('Content-type', 'text/html')
                res.statusCode = 200;
                res.end(data);
            });
        } else if (pathName ==='/posts' && method === 'GET') {
            // res.writeHead(200, {
            //     'Content-type': 'application',
            //     'email':'programing-hero.com', 
            // });
    
           fs.readFile(__dirname +  '/posts.json', 'utf-8', (err, data) => {
    
                if(err) {    
                    throw new Error('Error! readig file!')
                }
                 const query = parsedURL.searchParams;
                 const postId = query.get('id');
    
                 const expectedPost = JSON.parse(data).find((post) => post.id == postId);
                 
                 console.log(expectedPost)
    
    
                res.setHeader('Content-type', 'application/json')
                res.statusCode = 200;
                res.end(JSON.stringify(expectedPost));
            });
      
            
        } else if(pathName === '/create-post' && method ==='POST') {
            let body = "";
            req.on('data', (buffer) => {
                body += buffer.toString();
            });
            req.on("end", async() => {
                const postData = JSON.parse(body);
                const result = await postCollection.insertOne(postData);

                res.setHeader("Content-type", 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({
               message: "Post created successfully",
               data: result,
            }));
            })
       
        
        } else if(pathName.startsWith('/update-post')&& method === 'PATCH') {

        }
        else {
            res.end('Not found')
        }
    });
    
        server.listen(5000, '127.0.0.1', () => {
        console.log('Server is listening on port5000')
    })




    } finally {
      
    //   await client.close();
    }
  }
  run().catch(console.dir);

