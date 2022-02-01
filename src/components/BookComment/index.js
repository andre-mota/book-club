import React from "react";

import { Card } from "react-bootstrap";

export default function BookComment(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.User.name}</Card.Title>
        <Card.Text>{props.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}
