import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import BookDetails from "./BookDetails";

function App() {
  const [books, setBooks] = useState("");

  useEffect(() => {
    async function fetchData() {
      const allBooks = await BooksAPI.getAll();

      setBooks(allBooks);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Route exact path={"/"}>
        <BookList booksState={{ books, setBooks }} />
      </Route>
      <Route path={"/search"}>
        <Search booksState={{ books, setBooks }} />
      </Route>
      <Route path={"/book/:id"}>
        <BookDetails books={books} />
      </Route>
    </div>
  );
}

export default App;
