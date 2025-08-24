const authors = [
  { id: 1, name: 'William Shakespeare' },
  { id: 2, name: 'Wu Cheng\'en' },
  { id: 3, name: 'Ryan Novak, Concerned Ape' },
  { id: 4, name: 'Vinson He (That\'s me!)'},
];

const books = [
  { id: 1, name: 'Hamlet' },
  { id: 2, name: 'Journey to the West' },
  { id: 3, name: 'The Official Stardew Valley Cookbook' },
  { id: 4, name: 'Watch me achieve mah dreams (grammar!)' },
];

const findAuthorById = async (authorId) => authors.find(author => author.id === authorId);
const findBookById = async (bookId) => books.find(book => book.id === bookId);

export { findAuthorById, findBookById };