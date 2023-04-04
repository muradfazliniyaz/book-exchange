// VIEW
import express from 'express';
const router = express.Router();
import { 
    getUserById,
    createUser,
    changeUserInfo,
    deleteUserById,
    getAllUsers,
    //getTotalNumberOfBooksByUser
} from './user.repository.js';

// ReST API Definition - Endpoints
router.get('/users', async (reqest, response) => {
    const allUsers = await getAllUsers();
    response.json(allUsers)
});

router.get('/users/:id', async (request, response) => {
    const userId = request.params.id;
    // find the user by user id in the array
    const searchedUser = await getUserById(userId)
    response.status(200).json(searchedUser)
});

router.post('/users', async (request, response) => {
    const aUser = request.body;
    await createUser(aUser);
    response.status(201).json();
});

router.put('/users/:id', async (request, response) => {
    const userId = request.params.id;
    const aUser = request.body;
    await changeUserInfo(userId, aUser);
    response.status(200).json();
});

router.delete('/users/:id', async (request, response) => {
    const userId = request.params.id;
    await deleteUserById(userId);
    response.status(200).json();
});

// router.get('/books/users/:id', async (request, response) => {
//     const userId = request.params.id;
//     const totalBookNumber = await getTotalNumberOfBooksByUser(userId)
//     response.status(200).json(totalBookNumber)
// });

export {
    router
}