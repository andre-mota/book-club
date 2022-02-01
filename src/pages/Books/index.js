import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Book from "../../components/Book";
import { selectBooks } from "../../store/books/selectors";
import { fetchBooks } from "../../store/books/actions";

import "./books.css";

export default function Books() {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  console.log(books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1>Discussions</h1>
      </Jumbotron>
      <div className="bookList">
        <Container>
          {books.map((book) => {
            return (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                lccn={book.lccn}
                coverUrl={book.coverUrl}
              />
            );
          })}
        </Container>
      </div>
    </>
  );
}
