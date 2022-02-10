const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const {
  addBook,
  listBooks,
  searchBooks,
  updateBook,
  deleteBook,
} = require("./books/bookmethods");

const app = async () => {
  if (argv.add) {
    const bookObject = {
      title: argv.title,
      author: argv.author,
      year: argv.year,
      genre: argv.genre,
      rating: argv.rating,
      synopsis: argv.synopsis,
    };
    await addBook(bookObject);
  } else if (argv.list) {
    await listBooks();
  } else if (argv.search) {
    await searchBooks(argv);
  } else if (argv.update) {
    await updateBook(argv);
  } else if (argv.delete) {
    await deleteBook(argv);
  } else {
    console.log("Sorry, incorrect command");
  }
};

app();
