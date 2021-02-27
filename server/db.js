const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Shrey:root@cluster0.649e8.mongodb.net/User?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err=>{
   const collection = client.db("User").collection("User");
    module.exports=collection;
});


