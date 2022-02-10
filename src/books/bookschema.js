const sequelize = require("../DB/connection");
const { DataTypes } = require("Sequelize");

const Book = sequelize.define("Alexandria", {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER },
  genre: { type: DataTypes.STRING },
  rating: { type: DataTypes.INTEGER },
  synopsis: { type: DataTypes.STRING },
});

module.exports = Book;
