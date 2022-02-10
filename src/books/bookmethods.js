const Book = require("./bookschema");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

exports.addBook = async (bookObject) => {
  try {
    await Book.sync();
    await Book.create(bookObject);
  } catch (error) {
    console.log(error);
  }
};

exports.listBooks = async () => {
  try {
    let bookList = await Book.findAll();
    console.log(bookList);
  } catch (error) {
    console.log(error);
  }
};

exports.searchBooks = async (bookObject) => {
  try {
    searchCriteria = Object.entries(bookObject);
    searchValue = [];
    searchValue.push(searchCriteria[2]);
    searchObj = Object.fromEntries(searchValue);
    let searchResult = await Book.findAll({ where: searchObj });
    console.log(searchResult);
  } catch (error) {
    console.log(error);
  }
};

exports.updateBook = async (argv) => {
  try {

  } catch (error) {
    console.log(error);
  }
};

exports.deleteBook = async (argv) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
