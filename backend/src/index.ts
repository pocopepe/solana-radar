import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('bah');
});
app.post('/', (req, res)=>{
    res.send('post');
})

app.listen(port);