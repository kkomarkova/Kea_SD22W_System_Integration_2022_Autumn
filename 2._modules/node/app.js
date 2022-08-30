import express from 'express';
const app = express();
import path from 'path';

app.use(express.static("public"));


app.get("/duck", (req, res) => {
    res.sendFile(path.resolve("./public/duck.html"));
});

app.get("/endpoint", (req, res) => {
    res.send({ message: "OK OK OK" });
});

app.get("/pythonmessage", async (req, res) => {
    const pythonResponse = await fetch("http://127.0.0.1:8000/mymessage");
    const pythonMessage = await pythonResponse.json();
    
    res.send(pythonMessage);
});

app.listen(3000, () => {
    console.log("Server is running on", 3000);
});
