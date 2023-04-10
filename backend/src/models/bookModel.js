import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("booky", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
});

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    isbnNumber: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    explanation: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
  },
  {
    tableName: "books",
  }
);

export default Book;
