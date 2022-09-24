import fetch from 'node-fetch';
import express, { response } from 'express';

// const express = require('express')
const app = express()
const port = 6000


app.get('/', (req, res) => {
 var date = new Date().toISOString();
  res.send("The current date is "  + date)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Trying to fetch google pages - DONE
// fetch('https://google.com')
// .then(res => res.text())
// .then(text => console.log(text));

// JSON - I am running the file on local host with using command npx http-server 
fetch('http://192.168.56.1:8080/me.json')
.then(response => {
   return response.json();
   
})
.then(jsondata => console.log(jsondata));

//Read Text file 
fetch('http://192.168.56.1:8080/me')
.then(res => res.text())
.then(text => console.log(text));


