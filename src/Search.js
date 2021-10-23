import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

const Search = ({ booksState }) => {
  const { books, setBooks } = booksState;
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  var letSearch = false;
  const searchQuery = async (query) => {
    if (!letSearch) {
      letSearch = true;
      if (query !== "") {
        const searched = await BooksAPI.search(query);
        setSearch(searched);
      } else {
        setSearch(query);
      }
      letSearch = false;
    } else {
      setTimeout(() => searchQuery(query), 5);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"}>
          <button className="close-search">Close</button>
        </Link>

        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              searchQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {(search === "" && <div>Search for Books</div>) ||
            (search.error && <div>No Books Found</div>)}
          {search.length > 0 &&
            search.map((book) => {
              return (
                <Book
                  key={book.id}
                  books={books}
                  book={book}
                  setBooks={setBooks}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
