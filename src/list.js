export const generateRandomNumber = (range = 10000) => Math.floor(Math.random() * range);

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids',
  'Learning', 'Sci-Fi'];

export const defaultBooks = [
  {
    bookID: generateRandomNumber(),
    title: 'SHERLOCK OF HOLMES',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    bookID: generateRandomNumber(),
    title: 'INTO THE MULTIVERSE',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    bookID: generateRandomNumber(),
    title: 'DANCE WITH ME',
    category: categories[generateRandomNumber(categories.length)],
  },
];
