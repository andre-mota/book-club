import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { selectMyDiscussions } from "../../store/discussions/selectors";
import { fetchMyDiscussions } from "../../store/discussions/actions";
import Discussion from "../../components/Discussion";

export default function MyDiscussions() {
  const dispatch = useDispatch();
  const myDiscussions = useSelector(selectMyDiscussions);

  useEffect(() => {
    dispatch(fetchMyDiscussions());
  }, [dispatch]);

return (
  <>
  <Jumbotron>
    <h1>My Discussions</h1>
  </Jumbotron>
  <Container>
    {myDiscussions.map(discussion => {
      return(
        <Discussion
        key={discussion.id}
        id={discussion.id}
        comment={discussion.comment}
        />
      );
    })}
  </Container>
  </>
);
}
