import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

const Book = ({ books, book, setBooks }) => {
  let onShelf;
  if (books) {
    onShelf = books.filter((c) => c.id === book.id);
    if (onShelf.length === 1) {
      onShelf = onShelf[0].shelf;
    } else {
      onShelf = false;
    }
  } else {
    onShelf = book.shelf;
  }

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const allBooks = await BooksAPI.getAll();
    setBooks(allBooks);
  };
  return (
    <li>
      <div className={"book"}>
        <div className="book-top">
          <Link
            style={{
              textDecoration: "none",
              color: "initial",
            }}
            to={`/book/${book.id}`}
          >
            <img
              className="book-cover"
              src={book.imageLinks && book.imageLinks.thumbnail}
              alt={"No Thumbnail"}
            />
          </Link>
          <div className="book-shelf-changer">
            <select
              value={onShelf || "none"}
              onChange={(e) => changeShelf(book, e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="read">Read</option>
              <option value="wantToRead">Want to Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join("\n")}
        </div>
      </div>
    </li>
  );
};

export default Book;
