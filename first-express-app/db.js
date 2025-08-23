const authors = [
  { id: 1, name: 'William Shakespeare' },
  { id: 2, name: 'Wu Cheng\'en' },
  { id: 3, name: 'Concerned Ape' },
  { id: 3, name: 'Vinson He (That\'s me!)'},
];

const findAuthorById = async (authorId) => authors.find(author => author.id === authorId);

export { findAuthorById };