/*
  Some Response Methods
  - get
  - post 
  ...
  - all


*/

import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  return res.json({
    success: true,
    name: 'John Doe',
  })
})

app.get('/example', (req: Request, res: Response) => {
  return res.redirect('http://example.com')
})

app.post('/api/data', (req: Request, res: Response) => {
  console.log(req.body)

  return res.sendStatus(200)
})

app.all('/api/all', (req: Request, res: Response) => {
  return res.status(200).send('All')
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
