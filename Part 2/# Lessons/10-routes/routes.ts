import { Express, Request, Response, NextFunction } from 'express'

// 1.
function routes(app: Express) {
  app.get('/books/:bookID', (req: Request, res: Response) => {
    // @ts-ignore
    console.log(res.locals.name)
    res.send('Hello There')
  })
}

export default routes
