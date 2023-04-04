import mysql from 'mysql2/promise';

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'hicoders',
      password: 'hicoders_12',
      database: 'booky'
    });
    console.log('Connected to the database!');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

async function getAllBooks(){
    const connection = await connectToDatabase()
    const [rows, fields] = await connection.execute('SELECT * FROM books');
    return rows;
}

async function getBookById(pBookId){
    const connection = await connectToDatabase()
    const [rows, fields] = await connection.execute(`SELECT * FROM books WHERE id=${pBookId}`);
    return rows;
}

async function createBook({title, author, isbnNumber, explanation}){
    const connection = await connectToDatabase();

    const query = `
            INSERT INTO books(id, title, author, isbnNumber, explanation) 
            VALUES (null, '${title}','${author}','${isbnNumber}''${explanation}')
    `;
    
    const [rows, fields] = await connection.execute(query);
    return rows;
}

async function changeBookInfo(pBookId, {title, author, isbnNumber, explanation}){
    const connection = await connectToDatabase();
    const query = `
        UPDATE books 
        SET title='${title}',
            author='${author}',
            isbnNumber='${isbnNumber}',
            explanation=${explanation},
        WHERE id=${pBookId} `;
    const [rows, fields] = await connection.execute(query);
    return rows;
}

async function deleteBookById(pBookId){
    const connection = await connectToDatabase();
    const query = `DELETE FROM books WHERE id=${pBookId} `;
    
    const [rows, fields] = await connection.execute(query);
    return rows;
}

async function getTotalNumberOfBooksByUser(userId){
    const connection = await connectToDatabase();
    const query = `
        SELECT SUM(total) as murat
        FROM orders as o
        WHERE customer_id=${userId}
    `;
    
    const [rows, fields] = await connection.execute(query);
    return rows;
}

export {
    getBookById,
    createBook,
    changeBookInfo,
    deleteBookById,
    getAllBooks,
    getTotalNumberOfBooksByUser
}