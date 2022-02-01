// import React from "react";
// import Button from "react-bootstrap/Button";
// import { Card } from "react-bootstrap";

// export default function Book(props) {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text>{props.title}</Card.Text>

//         {props.showLink && (
//           <Link to={`/discussions/${props.id}`}>
//             <Button>Discuss</Button>
//           </Link>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }

import React from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./book.css";

import { Link } from "react-router-dom";

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
