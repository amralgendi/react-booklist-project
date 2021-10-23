import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import AverageRating from "./AverageRating";

const BookDetails = (books) => {
  const history = useHistory();
  const { id } = useParams();
  const [book, setBook] = useState("");

  useEffect(() => {
    async function fetchData() {
      const bookbyId = await BooksAPI.get(id);
      setBook(bookbyId);
    }
    fetchData();
  }, [id]);

  return (
    typeof book === "object" && (
      <div className={"book-details"}>
        <button className="close-search" onClick={() => history.goBack()}>
          Close
        </button>
        <div className={"details"}>
          <div className={"main-details"}>
            <img
              className="book-cover"
              src={book.imageLinks && book.imageLinks.thumbnail}
              alt={"No Thumbnail"}
            />
            <div className={"summary"}>
              <div className={"book-title"}>{book.title}</div>
              <div className="book-authors">
                {book.authors && book.authors.join("\n")}
              </div>
              {book.averageRating ? (
                <AverageRating rating={book.averageRating} />
              ) : (
                <div>No Rating</div>
              )}
              <div className="book-pages">{`${book.pageCount} pages`}</div>
              {book.categories && (
                <div className="book-categories">
                  Categories : {book.categories.join(", ")}
                </div>
              )}
            </div>
          </div>
          <div className={"book-description"}>
            {book.description ? (
              <>{book.description}</>
            ) : (
              <div>No description</div>
            )}
          </div>
        </div>
      </div>
    )
  );
};
export default BookDetails;
