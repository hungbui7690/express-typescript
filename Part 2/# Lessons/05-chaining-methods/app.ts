/*
  Chaining Methods


*/

import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())

app
  .route('/')
  .get((req: Request, res: Response) => {
    return res.send('You make a GET request')
  })
  .post((req: Request, res: Response) => {
    return res.send('You make a Post request')
  })
  .put((req: Request, res: Response) => {
    return res.send('You make a PUT request')
  })
  .all((req: Request, res: Response) => {
    return res.send('You make an X request')
  })

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
