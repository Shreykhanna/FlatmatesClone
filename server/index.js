const express=require('express');
const cors=require('cors');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Shrey:root@cluster0.649e8.mongodb.net/User?retryWrites=true&w=majority";
// const client=require('./db');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app=new express();
app.use(cors());
app.use(express.json());

app.post('/register',(req,res)=>{
    client.connect(err => {
     const collection = client.db("User").collection("Register");
      collection.insertOne(req.body,function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
       // db.close();
      });
      res.json();
});

app.get('/login',(req,res)=>{
    
});

});


app.listen(5000,()=>{
    console.log("server connected");
})