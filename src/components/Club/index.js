import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

export default function Club(props) {
  return (

    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
      {props.joinCode}
      </Card.Text>
      <Button variant="primary">Join</Button>
    </Card.Body>
  </Card>
  );
}