import fetch from 'node-fetch';
import express from 'express';

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

//Fetch the date from the python server
fetch('http://127.0.0.1:8000/time')
.then(res=> res.json())
.then(json => {
  console.log("Date from the python server is : ");
  console.log(json[0]);
})