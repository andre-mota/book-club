import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { selectClubs } from "../../store/clubs/selectors";
import { fetchClubs } from "../../store/clubs/actions";
import Club from "../../components/Club";

export default function Clubs() {
  const dispatch = useDispatch();

  const clubs = useSelector(selectClubs);

  useEffect(() => {
    dispatch(fetchClubs());
  }, [dispatch]);

return (
  <>
  <Jumbotron>
    <h1>Clubs</h1>
  </Jumbotron>
  <Container>
    {clubs.map(club => {
      return(
        <Club
        key={club.id}
        id={club.id}
        name={club.name}
        joinCode={club.joinCode}
        />
      );
    })}
  </Container>
  </>
);
}
