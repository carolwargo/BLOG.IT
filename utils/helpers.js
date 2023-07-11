module.exports = {

    // FORMAT the date in MM/DD/YYYY format
    format_date: date => {
      console.log(date); // Log the provided date for debugging
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
  
    // FORMAT a word to its plural form based on the amount
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`; // APPEND 's' to the word if amount is not equal to 1
      }
      return word; // RETURN the word IF amount IS equal to 1
    },
  };
  