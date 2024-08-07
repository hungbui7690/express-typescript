/*
  Generic Types


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

// Generic Types -> check pic -> when we hover on Request type -> it shows the types with parameters: <{params}, {res}, {req}...>
// -> with the below implementation, we can handle the user input -> user still can put the other stuffs in req.body -> but when we use here, it will return errors
app.post(
  '/books/:bookID',
  (
    req: Request<
      { name: 'string'; authorId: 'string' }, // now we can access req.params.name / authorId
      {},
      { name: 'string' }, // we can access req.body.name
      {}
    >,
    res: Response
  ) => {
    const { name } = req.body // we just can extract req.body.name here
    // @ts-ignore
    console.log(res.locals.name)
    res.send('Hello There')
  }
)

app.listen(3000, () => console.log(`Server is listening on port 3000...`))
