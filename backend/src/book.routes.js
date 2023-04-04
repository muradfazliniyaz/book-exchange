// VIEW
import express from 'express';
const router = express.Router();
import { 
    getBookById,
    createBook,
    changeBookInfo,
    deleteBookById,
    getAllBooks,
    getTotalNumberOfBooksByUser
} from './book.repository.js';

// ReST API Definition - Endpoints
router.get('/books', async (reqest, response) => {
    const allBooks = await getAllBooks();
    response.json(allBooks)
});

router.get('/books/:id', async (request, response) => {
    const bookId = request.params.id;
    // find the fish by book id in the array
    const searchedBook = await getBookById(bookId)
    response.status(200).json(searchedBook)
});

router.post('/books', async (request, response) => {
    const aBook = request.body;
    await createBook(aBook);
    response.status(201).json();
});

router.put('/books/:id', async (request, response) => {
    const bookId = request.params.id;
    const aBook = request.body;
    await changeBookInfo(bookId, aBook);
    response.status(200).json();
});

router.delete('/books/:id', async (request, response) => {
    const bookId = request.params.id;
    await deleteBookById(bookId);
    response.status(200).json();
});

router.get('/books/users/:id', async (request, response) => {
    const userId = request.params.id;
    const totalBookNumber = await getTotalNumberOfBooksByUser(userId)
    response.status(200).json(totalBookNumber)
});

export {
    router
}