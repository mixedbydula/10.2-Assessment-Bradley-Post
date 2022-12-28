function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  let total = 0
  for (let account in accounts){
    total ++
  }
//   return accounts.length
  return total
}

function getBooksBorrowedCount(books) {
 let count = 0
   books.filter((book) => {
     if (book.borrows[0].returned !== true) count ++})
       return count
}

function getMostCommonGenres(books) {
  //return an array of <5 objects; most occurring genres to least; [name: "genre", count: amount]
  //iterate over books.genre and store books.genre + count
  //for each time a new genre is more than the last; a new genre begins
  let countObj = {};

  books.forEach(aBook => {
    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++;
    } else {
      countObj[aBook.genre] = 1;
    }
  });

  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    });
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}

function getMostPopularBooks(books) {
  //Array of 5 objects or less; ordered by most borrows
  //array: object: "name":  book title, count:  number of borrows

  let popularBooks = [];
  const borrows = books.reduce((acc, book) => {
    popularBooks.push({name: book.title, count: book.borrows.length});
  }, [])
  popularBooks.sort((a,b) => b.count - a.count);
  return popularBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorList = books.reduce((acc, book) => {
    const {authorId, borrows} = book;
    const authorObj = authors.find(author => author.id === authorId);
    const name = `${authorObj.name.first} ${authorObj.name.last}`;
    const count = borrows.length;
    const authExists = acc.find(auth => auth.name === name);
    if(authExists) {
      authExists.count += count;
    } else {
      const newAuthEntry = {
        name,
        count
      };
      acc.push(newAuthEntry);
    }
    return acc;
  }, []);
  const sortedAuthorList = authorList.sort((a, b) => b.count - a.count);

  const topFive = sortedAuthorList.slice(0, 5);
  return topFive;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
