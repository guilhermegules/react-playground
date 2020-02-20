import React, { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
import BookDetails from "./BookDetail";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  // const { isLightTheme, light, dark } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. hello free time :)</div>
  );
};

export default BookList;
