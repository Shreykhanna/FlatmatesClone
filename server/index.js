const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
dotenv.config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = new express();
app.use(cors());
app.use(express.json());

app.get('/listings', async (req, res) => {
    //res.send('hello wowrld')
    console.log('Inside /homepage route');
    await client.connect();
    const collection = client.db('User').collection('Register');
    result=await collection.findOne({fullname:'Shrey Khanna'});
    // console.log(result);
    // console.dir;
    res.send(result);
});
app.post('/register', (req, res) => {
	client.connect((err) => {
		const collection = client.db('User').collection('Register');
		collection.insertOne(req.body, function(err, res) {
			if (err) throw err;
			console.log('1 document inserted');
			// db.close();
		});
		res.json();
	});
	// app.get('/login',(req,res)=>{

	// });
});
app.post('/post/ad/',(req,res)=>{
    client.connect(err=>{
    const collection=client.db('User').collection('listings');
    collection.insertOne(req.body,function(err,res){
        if (err) throw err;
    })
    res.json();
    });

})

app.listen(5000, () => {
	console.log('server connected');
});
