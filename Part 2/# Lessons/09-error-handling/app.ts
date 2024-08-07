/*
  Error Handling


*/

import express, { Request, Response, NextFunction } from 'express'
const app = express()
app.use(express.json())

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name
    next()
  }

app.use(middleware({ name: 'John Doe' }))

app.post('/books/:bookID', (req: Request, res: Response) => {
  // @ts-ignore
  console.log(res.locals.name)
  res.send('Hello There')
})

// 1. express can handle err for us
app.get('/error', () => {
  throw new Error('Boom!')
})

// 2. async error
async function throwErr() {
  throw new Error('Boom!')
}

// 3. express 4 -> it will hang -> we will have to use try/catch block
// -> express 5 will work without try/catch
app.get('/async-err', async (req, res) => {
  try {
    await throwErr()
    res.send('OK')
  } catch (error) {
    res.status(400).send('Something went wrong')
  }
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
