import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

export default function Discussion(props) {
  return (

    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.comment}</Card.Title>
      <Card.Text>
      {props.comment}
      </Card.Text>
      <Button variant="primary">Join</Button>
    </Card.Body>
  </Card>
  );
}