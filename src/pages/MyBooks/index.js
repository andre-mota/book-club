import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Book from "../../components/Book";
import { selectMyBooks } from "../../store/books/selectors";
import { fetchMyBooks } from "../../store/books/actions";

export default function MyBooks() {
  const dispatch = useDispatch();
  const myBooks = useSelector(selectMyBooks);

  useEffect(() => {
    dispatch(fetchMyBooks());
  }, [dispatch]);

return (
  <>
  <Jumbotron>
    <h1>My Discussions</h1>
  </Jumbotron>
  <Container>
    {myBooks.map(book => {
      return(
        <Book
        key={book.id}
        id={book.id}
        title={book.title}
        />
      );
    })}
  </Container>
  </>
);
}