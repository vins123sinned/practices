import { findBookById } from "../db.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

const getBookById = async (req, res) => {
  const { bookId } = req.params;

  const book = await findBookById(Number(bookId));

  if (!book) throw new CustomNotFoundError('No books found!');

  res.send(`Book name: ${book.name}`);
};

export { getBookById };