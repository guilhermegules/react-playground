import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, isSelected] = useState("");

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error</p>;

  const { books } = data;

  const displayBooks = books.map((book) => (
    <li
      key={book.id}
      onClick={() => {
        isSelected(book.id);
      }}
    >
      {book.name}
    </li>
  ));

  return (
    <div>
      <ul className="book-list">{displayBooks}</ul>
      <BookDetails bookId={selected} />
    </div>
  );
}

export default BookList;
