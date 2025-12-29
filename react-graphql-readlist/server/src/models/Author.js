const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const authors = require("./authorData");

const authorSchema = new Schema({
  name: String,
  age: Number,
});

const Author = mongoose.model("Author", authorSchema);

authors.forEach((author) => {
  const { name, age } = author;
  Author.insertMany([
    new Author({
      name,
      age,
    }).populate((error) => {
      if (error) console.error(error);
      else console.log("Author saved");
    }),
  ]);
});

module.exports = Author;
