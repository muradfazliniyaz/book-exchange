import { Sequelize } from "sequelize";
import Book from "../models/bookModel.js";
import User from "../models/userModel.js";

const sequelize = new Sequelize("booky", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true,
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await Book.sync({ force: true });
    await User.sync({ force: true });
    console.log("Connected!");
  } catch (error) {
    console.log("Error", error);
  }
};

connectToDatabase();
