import { Request, Response, NextFunction } from 'express'

const getBookHandler = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  console.log(res.locals.name)
  res.send('Hello There')
}

export default getBookHandler
