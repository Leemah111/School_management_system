const Library = require('.././models/library.js')


async function addBook(req, res){
  try {
    const newBook = await Library.create(req.body);
    res.status(200).json(newBook);
  } catch (error) {
    console.log('cant add book: ', error.message);
    res.status(401).json({message: 'Cant add book'});
  }  
}
  async function getAllBooks(req, res){
    try {
      const books = await Library.find();
      res.status(200).json(books);
    } catch (error) {
      console.log('cant get books: ', error.message);
      res.status(401).json({error: error.message});
    }
  }

  async function getBookById(req, res){
    try {
      const book = await Library.findById(req.params.todoId);
      res.status(200).json(book);
    } catch (error) {
      console.log('cant get book: ', error.message); 
      res.status(401).json({error: error.message});   
    }
  }

  async function deleteBookById(req, res){
    const bookId = req.params.bookId;
    try {
      await Library.findByIdAndDelete(bookId);
      res.status(200).json({message: 'Book has been deleted'});
    } catch (error) {
      console.log('cant delete: ', error.message);
      res.status(401).json({error: error.message});
    }
  }
  

module.exports = { 
  getAllBooks,
  getBookById, 
  addBook,
  deleteBookById
}
