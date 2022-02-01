import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Book from "../../components/Book";
import { selectMyBooks } from "../../store/books/selectors";
import { fetchMyBooks } from "../../store/books/actions";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
  {myBooks.length !== 0 ? (
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
  ) : 
  <Container>
    <p>You don't have any active discussions yet.</p>  
    <Link to={`/`}>
      <Button>Discover</Button>
    </Link>
    <br/>
    <br/>
    <Link to={`/search`}>
      <Button>Add a new discussion</Button>
    </Link>
  </Container>
  }
  </>
);
}