import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./book.css";

export default function Book(props) {
  const discussionPage = `/discussions/${props.id}`;
  return (
    <div className="bookCard">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={props.coverUrl} />
          <Card.Title style={{ marginTop: "5%", marginBottom: "5%" }}>
            {props.title}
          </Card.Title>
          <Link to={discussionPage}>
            <Button variant="primary">Go to discussion</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
