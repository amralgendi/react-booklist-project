import Book from "./Book";

const BookShelf = ({ title, shelf, books }) => {
  return (
    typeof books.books === "object" && (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.books.map((book) => {
              return (
                book.shelf === shelf && (
                  <Book key={book.id} book={book} setBooks={books.setBooks} />
                )
              );
            })}
          </ol>
        </div>
      </div>
    )
  );
};

export default BookShelf;
