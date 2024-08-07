/*
  Middleware 
  - Currying Technique


*/

import express, { Request, Response, NextFunction } from 'express'
const app = express()
app.use(express.json())

// 1. if we want to pass parameter to middleware -> we need to return a function -> this technique is called "currying"
const middleware = ({ name }: { name: string }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore: ignore typescript check for the next line
    req.name = name
    next()
  }
}

// 2. pass args to middleware
app.use(middleware({ name: 'John Doe' }))

app.get('/books/:bookID', (req: Request, res: Response) => {
  // @ts-ignore
  console.log(req.name)
  res.send('Hello There')
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
