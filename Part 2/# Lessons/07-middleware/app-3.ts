/*
  Middleware 
  - global mdw


*/

import express, { Request, Response, NextFunction } from 'express'
const app = express()
app.use(express.json())

const handleGetBookOne = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore: ignore typescript check for the next line
  req.name = 'John'
  next()
}
const handleGetBookTwo = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  console.log(req.name)
  next()
}

// 1. global middleware -> apply for all routes after this
app.use(handleGetBookOne, handleGetBookTwo)

app.get('/books/:bookID', (req: Request, res: Response) => {
  res.send('Hello There')
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
