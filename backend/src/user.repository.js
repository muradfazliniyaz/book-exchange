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

async function getAllUsers(){
    const connection = await connectToDatabase()
    const [rows, fields] = await connection.execute('SELECT * FROM users');
    return rows;
}

async function getUserById(pUserId){
    const connection = await connectToDatabase()
    const [rows, fields] = await connection.execute(`SELECT * FROM users WHERE id=${pUserId}`);
    return rows;
}

async function createUser({name, surname, email, sex, birthDate, maritalStatus}){
    const connection = await connectToDatabase();

    const query = `
            INSERT INTO users(id, name, surname, email, sex, birthDate, maritalStatus) 
            VALUES (null, '${name}','${surname}','${email}','${sex}','${birthDate}','${maritalStatus})
    `;
    
    const [rows, fields] = await connection.execute(query);
    return rows;
}

async function changeUserInfo(pUserId, {name, surname, email, sex, birthDate, maritalStatus}){
    const connection = await connectToDatabase();
    const query = `
        UPDATE users 
        SET name='${name}',
            surname='${surname}',
            email='${email}',
            sex='${sex}',
            birthDate='${birthDate}',
            maritalStatus='${maritalStatus}',
        WHERE id=${pUserId} `;
    const [rows, fields] = await connection.execute(query);
    return rows;
}

async function deleteUserById(pUserId){
    const connection = await connectToDatabase();
    const query = `DELETE FROM users WHERE id=${pUserId} `;
    
    const [rows, fields] = await connection.execute(query);
    return rows;
}

export {
    getUserById,
    createUser,
    changeUserInfo,
    deleteUserById,
    getAllUsers,
}