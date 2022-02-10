const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { addBook, list } = require("./books/bookmethods");

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
    await list();
  }
};

app();
