import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function BookDiscussionComment(props) {
  return (
    <Jumbotron>
      {/* Doesnt work this way we need the name from the User Table */}
      <h1>{`${props.name} commented...`}</h1>

      <p>{props.comment}</p>
    </Jumbotron>
  );
}
