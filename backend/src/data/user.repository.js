// import mysql from "mysql2/promise";
import User from "../models/userModel.js";

// async function connectToDatabase() {
//   try {
//     const connection = await mysql.createConnection({
//       host: "localhost",
//       user: "hicoders",
//       password: "hicoders_12",
//       database: "booky",
//     });
//     console.log("Connected to the database!");
//     return connection;
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   }
// }

async function getAllUsers() {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
}

async function getUserById(pUserId) {
  try {
    return await User.findOne({ where: { id:pUserId } });
  } catch (error) {
    console.log(error);
  }
}

async function createUser(pUser) {
  try {
    return await User.create(pUser);
  } catch (error) {
    console.log(error);
  }
}

async function changeUserInfo(pUserId, aUser) {
  try {
    return await User.update(aUser, { where: { id:pUserId } });
  } catch (error) {
    console.log(error);
  }
}

async function deleteUserById(pUserId) {
  try {
    return await User.destroy({where: { id:pUserId }});
  } catch (error) {
    console.log(error);
  }
}

export { getUserById, createUser, changeUserInfo, deleteUserById, getAllUsers };
