function findAuthorById(authors, id) {
  let matchId = authors.find((author) => author.id === id)
  return matchId
}

function findBookById(books, id) {
  let matchBookId = books.find((book) => book.id === id)
  return matchBookId  
}

function partitionBooksByBorrowedStatus(books) {
  //array with 2 arrays [checkedout (book, author), returned(book, author)]
  let borrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  let available = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));

  return borrwedStatus = [[...borrowed], [...available]]
}

function getBorrowersForBook(book, accounts) {
let result = [];
  
let borrowersForBook = book.borrows;
  borrowersForBook.forEach(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
      obj['returned'] =  borrow.returned;
      result.push(obj);
})
return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
