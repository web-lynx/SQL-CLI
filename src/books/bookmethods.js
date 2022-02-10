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

exports.searchBooks = async (argv) => {
  try {
    searchCriteria = Object.entries(argv);
    searchValue = [];
    searchValue.push(searchCriteria[2]);
    searchObj = Object.fromEntries(searchValue);
    let searchResult = await Book.findAll({ where: searchObj });
    console.log(searchResult);
  } catch (error) {
    console.log(error);
  }
};

//Selects row using the title, and then changes based on user input
exports.updateBook = async (argv) => {
  try {
    updateCriteria = Object.entries(argv);
    updateValue = [];
    updateValue.push(updateCriteria[3]);
    updateObj = Object.fromEntries(updateValue);
    console.log(updateCriteria);
    await Book.update(updateObj, { where: { title: argv.title } });
  } catch (error) {
    console.log(error);
  }
};

//Selects row using the title, and then deletes based on user input
exports.deleteBook = async (argv) => {
  try {
    deleteCriteria = Object.entries(argv);
    deleteValue = [];
    deleteValue.push(deleteCriteria[2]);
    deleteObj = Object.fromEntries(deleteValue);
    await Book.destroy({ where: deleteObj });
  } catch (error) {
    console.log(error);
  }
};
