function totalPages(book1, book2, book3) {
    return (book1 * 100) + (book2 * 200) + (book3 * 300);
  }
  
  const book1Copies = 2;
  const book2Copies = 3;
  const book3Copies = 4;
  
  const total = totalPages(book1Copies, book2Copies, book3Copies);
  
  console.log(`The total number of pages is: ${total}.`);
 
  