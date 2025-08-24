import { findAuthorById } from '../db.js';
import { CustomNotFoundError } from '../errors/CustomNotFoundError.js';

const getAuthorById = async (req, res) => {
  const { authorId } = req.params;

  const author = await findAuthorById(Number(authorId));

  if (!author) throw new CustomNotFoundError('Couldn\'t find author.');

  res.send(`Author name: ${author.name}`);
};

export { getAuthorById };