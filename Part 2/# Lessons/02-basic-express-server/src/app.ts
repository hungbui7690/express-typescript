/*
  Setup Express Server 
  ~~ npm install express
  ~~ npm i @types/node
  ~~ npm install --save @types/express


*/

import express from 'express'

const app = express()

// curl http://localhost:3000/
app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
