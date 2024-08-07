/*
  Security
  - helmet > check pictures to see the changes in headers


*/

import express, { Request, Response, NextFunction } from 'express'
import helmet from 'helmet' // 1.
import routes from './routes'
const app = express()

app.use(helmet()) // 2.
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
