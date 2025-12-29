import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    skip: !bookId,
    variables: { id: bookId },
  });

  let content;
  if (loading) content = <p>Loading...</p>;
  else if (error) content = <p>Error :(</p>;
  else if (!bookId) content = <p>No book selected</p>;
  else {
    const {
      book: { name, genre, author },
    } = data;

    const books = author.books.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
    content = (
      <>
        <h2>{name}</h2>
        <p>{genre}</p>
        <p>{author.name}</p>
        <p>All books by this author</p>
        <ul className="other-books">{books}</ul>
      </>
    );
  }

  return <div className="book-details">{content}</div>;
}

export default BookDetails;
