import express from 'express';
import {userControll} from './controller/userController.js'
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));

app.get('/users',userControll);

app.listen(3200);