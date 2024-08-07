/*
  Folder Structure:
  + Method 1:
    - Services/ : use to connect to database > Services will import models
    > Services import Models > Controllers import Services > Routes import Controllers


*************************

  + Method 2: this is the way NextJS use
    - src/books: 
      + books.controller.ts
      + books.models.ts
      + books.service.ts
    - src/:
      + app.ts
      + routes.ts


*/

import express, { Request, Response, NextFunction } from 'express'
import routes from './routes'

const app = express()
app.use(express.json())

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name
    next()
  }

app.use(middleware({ name: 'John Doe' }))

routes(app)

app.get('/error', () => {
  throw new Error('Boom!')
})

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
