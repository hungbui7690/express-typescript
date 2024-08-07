import { Express } from 'express'
import getBookHandler from './controllers/books.controller'

function routes(app: Express) {
  app.get('/books/:bookID', getBookHandler)
}

export default routes
