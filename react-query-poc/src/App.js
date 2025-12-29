import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Planets from "./components/Planets";
import People from "./components/People";

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <>
      <main className="App">
        <h1>Star Wars Info</h1>
        <NavBar setPage={setPage} />
        <section className="content">
          {page === "planets" ? <Planets /> : <People />}
        </section>
      </main>
    </>
  );
};

export default App;
