import express from 'express';

const app = express();

app.listen(5555);

app.get("/",(req,res) => {
    res.send("selam");
});