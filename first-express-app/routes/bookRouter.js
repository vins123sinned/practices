import { Router } from 'express';
import { getBookById } from '../controllers/bookController.js';

const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('All books'));
bookRouter.get('/:bookId', getBookById);

export { bookRouter };