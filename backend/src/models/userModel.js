import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("booky", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    maritalStatus: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

export default User;
