const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
 var date = new Date().toISOString();
  res.send("The current date is "  + date)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})