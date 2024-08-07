/*
  Add Type for Request & Response Objects


*/

// 1. import "type"
import express, { type Request, Response } from 'express'

const app = express()
app.use(express.json())

// 2. apply type
app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World')
})

app.post('/api/data', (req: Request, res: Response) => {
  console.log(req.body)

  return res.sendStatus(200)
})

app.all('/api/all', (req: Request, res: Response) => {
  return res.status(200).send('All')
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
