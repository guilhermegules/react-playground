import React, { useState, useMemo, useCallback } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

function getOptions(loading, error, data) {
  if (loading) {
    return <option disabled>Loading Authors....</option>;
  } else if (error) {
    return <option disabled>Error loading Authors</option>;
  }
  return data.authors.map(({ name, id }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));
}

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const options = useMemo(() => getOptions(loading, error, data), [
    loading,
    error,
    data,
  ]);

  const nameCB = useCallback((event) => setName(event.target.value), []);
  const genreCB = useCallback((event) => setGenre(event.target.value), []);
  const authorCB = useCallback((event) => setAuthorId(event.target.value), []);
  const addCB = useCallback(
    (event) => {
      event.preventDefault();
      addBook({
        variables: {
          name,
          genre,
          authorId,
        },
        refetchQueries: [{ query: getBooksQuery }],
      });
    },
    [name, genre, authorId, addBook]
  );

  return (
    <form className="add-book" onSubmit={addCB}>
      <div className="field">
        <label htmlFor="Book name">Book name:</label>
        <input type="text" placeholder="Your favorite book" onChange={nameCB} />
      </div>
      <div className="field">
        <label htmlFor="Book genre">Genre:</label>
        <input type="text" placeholder="Book genre here" onChange={genreCB} />
      </div>
      <div className="field">
        <label htmlFor="Book author">Author:</label>
        <select onChange={authorCB}>
          <option>Select author</option>
          {options}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
