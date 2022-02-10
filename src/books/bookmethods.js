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

exports.list = async () => {
  try {
    const bookList = await Book.findAll();
    console.log(bookList);
  } catch (error) {
    console.log(error);
  }
};
