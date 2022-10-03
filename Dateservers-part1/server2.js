import express from 'express'
import yaml from 'js-yaml'
import * as fs from 'fs';
const app = express()


const path_to_file_template = '../1._file_types/me.'

//Getting the current date
app.get('/', (req, res) => {
  var date = new Date().toISOString();
   res.send("The current date is "  + date)
 })
 
//YAML
app.get("/yml", async (req, res) => {
    const yml_data = await fs.readFile(path_to_file_template + "yaml", {encoding: 'utf8'});
    const doc = yaml.load(yml_data);
    res.json(doc)
})

//JSON
app.get("/json", async (req, res) => {
  const jsonFile = await fs.readFile(path_to_file_template+'json', {encoding: 'utf8'});
  res.json(jsonFile)
})

//CSV
// app.get("/csv", async (req, res) => {
//   const file = req.file

//   const data = fs.readFileSync(path_to_file_template+'csv')
//   parse(data, (err, records) => {
//     if (err) {
//       console.error(err)
//       return res.status(400).json({success: false, message: 'An error occurred'})
//     }

//     return res.json({data: records})
//   })
// })

//XML
app.get('/xml', function (req, res) {
  res.set('Content-Type', 'text/xml');
  res.send(fs.readFileSync(path_to_file_template+'xml', {encoding: 'utf-8'}))
})
//TEXT
app.get("/txt", async (req, res) => {
  const txtFile = await fs.readFile(path_to_file_template+'txt', {encoding: 'utf8'});
  res.json(txtFile)
})


// JSON - I am running the file on local host with using command npx http-server 
// fetch("/" + path_to_file_template + "json" )
// .then(response => {
// return response.json()});
   
// })
// .then(jsondata => console.log(jsondata));

// app.get("/txt", async (req, res) => {
//     const txtFile = await fs.readFile(path_to_file_template+'txt', {encoding: 'utf8'});
//     const parsedTxtFileFromJson = txtToJson(txtFile)
//     res.json(parsedTxtFileFromJson)
// })

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})
