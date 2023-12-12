const quotes_list = [
  `To get something you never had, you have to do something you never did.`,
  `Everything returns, but what returns is not what went away.`,
  `Without commitment, you'll never start. But more importantly, without consistency, you'll never finish.`,
  `The magic you're looking for is in the work you're avoiding.`,
];

// Function to get the day of the year
const getDOY = () => {
  const date = new Date();
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
};

const getTodaysQuote = () => {
  const dayOfYear = getDOY();
  const index = dayOfYear % quotes_list.length;
  return quotes_list[index];
};

export default getTodaysQuote;
