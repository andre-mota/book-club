import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

import "./book.css";

export default function Book(props) {
  return (
    <div className="bookCard">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.coverUrl} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.lccn}</Card.Text>
      <Button variant="primary">Discuss</Button>
    </Card.Body>
  </Card>
  </div>
  );
}