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

app.listen(3000, () => {
    console.log("Server is running on", 3000);
});
