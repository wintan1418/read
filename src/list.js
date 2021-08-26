export const generateRandomNumber = (range = 10000) => Math.floor(Math.random() * range);

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const defaultBooks = [
  {
    bookID: generateRandomNumber(),
    title: 'A GAME OF THRONES',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    bookID: generateRandomNumber(),
    title: 'BORN A CRIME',
    category: categories[generateRandomNumber(categories.length)],
  },
  {
    bookID: generateRandomNumber(),
    title: 'AN ARMY AT DAWN',
    category: categories[generateRandomNumber(categories.length)],
  },
];
