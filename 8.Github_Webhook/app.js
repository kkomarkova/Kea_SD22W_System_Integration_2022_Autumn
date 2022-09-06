import express from 'express';
const app = express();

app.get('/github',(req,res) =>
{
    console.log(req.body);
    res.send();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log("Server is running on port", PORT);
});