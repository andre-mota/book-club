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

export default function Book(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.title}</Card.Text>
        <Link to={`/discussions/${props.id}`}>
          <Button variant="primary">Discuss</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
