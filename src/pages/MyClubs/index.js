import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import {  selectMyClubs } from "../../store/clubs/selectors";
import {  fetchMyClubs } from "../../store/clubs/actions";
import Club from "../../components/Club";

export default function MyClubs() {
  const dispatch = useDispatch();
  const myClubs = useSelector(selectMyClubs);

  useEffect(() => {
    dispatch(fetchMyClubs());
  }, [dispatch]);

return (
  <>
  <Jumbotron>
    <h1>My Clubs</h1>
  </Jumbotron>
  <Container>
    {myClubs.map(club => {
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
