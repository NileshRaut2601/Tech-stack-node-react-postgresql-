import express from 'express';
import {MongoClient} from 'mongodb';

const dbName='Movies';
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

const app = express();

app.set('view engine','ejs');

app.get('/',async (req,resp)=>{
     await client.connect();
     const db = client.db(dbName);
     const collection = db.collection('Movies_Data');
     const movies = await collection.find().toArray();


     resp.render('movies',{'movies':movies});
})

app.listen(3200);