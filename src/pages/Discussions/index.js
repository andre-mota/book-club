import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { selectDiscussions } from "../../store/discussions/selectors";
import { fetchDiscussions } from "../../store/discussions/actions";
import Discussion from "../../components/Discussion";

export default function Discussions() {
  const dispatch = useDispatch();

  const discussions = useSelector(selectDiscussions);

  useEffect(() => {
    dispatch(fetchDiscussions());
  }, [dispatch]);

return (
  <>
  <Jumbotron>
    <h1>Discussions</h1>
  </Jumbotron>
  <Container>
    {discussions.map(discussion => {
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
