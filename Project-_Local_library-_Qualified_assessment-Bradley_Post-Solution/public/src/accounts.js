function findAccountById(accounts, id) {
  const matchId = accounts.find((account) => account.id === id)
    return matchId
}

function sortAccountsByLastName(accounts) {
  const lastFirst = accounts.sort((accountA, accountB) => 
    accountA.name.last > accountB.name.last ? 1:-1)
    return lastFirst
}

function getTotalNumberOfBorrows(account, books) {
//iterate over books to find if account.id shows up in books.borrows.id add to total
 const accId = account.id;
   let total = 0;
   books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
   return total;
 } 

 function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed=[];
  books.forEach(book => {
    let borrowArray = book.borrows;
    if (borrowArray.find(borrow => 
      borrow.id === account.id && borrow.returned === false)) {
        booksPossessed.push(book);
    }
  })

  booksPossessed.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })

  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
