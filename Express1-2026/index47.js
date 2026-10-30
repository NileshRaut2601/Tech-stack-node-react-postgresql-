import express from 'express';
import {MongoClient} from 'mongodb';

const dbName='Movies';
const url='mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express();
app.set('view engine','ejs')
client.connect(url).then(async ()=>{
    const db = client.db(dbName);

    const collection = db.collection('Movies_Data');
    const movies = await collection.find().toArray();

    app.get('/api',(req,resp)=>{
        resp.send(movies);
    })
    app.get('/ui',(req,resp)=>{
        resp.render('movies',{'movies':movies});
    })
}

)

app.listen(3200);
