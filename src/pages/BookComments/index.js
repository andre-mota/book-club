import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import { fetchBookComments } from "../../store/bookcomments/actions";
import { selectBookComments } from "../../store/bookcomments/selectors";
import BookComment from "../../components/BookComment/";
import CommentForm from "../../components/BookComment/CommentForm";

export default function BookComments() {
  // const dispatch = useDispatch();

  // const bookComments = useSelector(selectBookComments);

  // useEffect(() => {
  //   // dispatch a "thunk action" by calling the "thunk action creator" named `fetchBookComments`
  //   dispatch(fetchBookComments()); // goes to `redux-thunk`
  // }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1>Book Discussion Comments</h1>
      </Jumbotron>
      <Container>
        <CommentForm />
        {/* {bookComments.map((bookComment) => {
          return (
            <BookComment
              key={bookComment.id}
              name={bookComment.User.name}
              comment={bookComment.comment}
            />
          );
        })} */}
      </Container>
    </>
  );
}
