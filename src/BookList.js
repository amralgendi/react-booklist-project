import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const BookList = ({ booksState }) => {
  const { books, setBooks } = booksState;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            shelf={"currentlyReading"}
            books={{ books, setBooks }}
          />
          <BookShelf
            title={"Want to Read"}
            shelf={"wantToRead"}
            books={{ books, setBooks }}
          />
          <BookShelf
            title={"Read"}
            shelf={"read"}
            books={{ books, setBooks }}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default BookList;
