import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Header from "./components/Header";
import Home from "./pages/Home";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <section className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/details/:id" element={<ReviewDetails />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </BrowserRouter>
      </section>
    </ApolloProvider>
  );
}

export default App;
