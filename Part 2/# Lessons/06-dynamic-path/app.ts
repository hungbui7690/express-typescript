/*
  Dynamic Path


*/

import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

// 1. wild card
app.get('/health', (req, res) => res.send('/health'))
app.get('/ab*cd', (req, res) => res.send('/ab*cd')) // /abcd or /abxcd or /abRANDOMcd
app.get('/abc|bcd/', (req, res) => res.send('/abc|bcd/')) // /abc or /bcd

// 2. req.params
app.get('/books/:bookID', (req, res) => {
  console.log(req.params.bookID)
  res.json(req.params)
})
app.get('/books/:bookID/:authorID', (req, res) => {
  res.json(req.params)
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
