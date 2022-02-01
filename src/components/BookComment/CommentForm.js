import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { postComment } from "../../store/bookcomments/actions";
import { useParams } from "react-router-dom";

// ## Post a comment
//Part 1: Plan backend
//1. Create an endpoint to post a comment
//2. Test our endpoint with httpie
//3. Once the endpoint is working, add the authMiddleware
//4. If all good move to frontend

//Part 2: Plan frontend setup
//1. Create a form component
//2. Create the form
//3. Import the form in
//4. Write the logic to show the form

//Part 3: Plan frontend redux-Data
//1. Write an action to post a comment
//2. Write a thunk (dont forget to clg)
//3. import the function in the component and dispatch
//4. Write the logic in the reducer

export default function CommentForm() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { id } = useParams();
  console.log(id);
  function submitForm(event) {
    event.preventDefault();

    console.log(comment);
    dispatch(postComment(comment, id));
  }
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Write your comment</h1>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          type="text"
          placeholder="Write your comment here..."
          required
        />
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post comment!
        </Button>
      </Form.Group>
    </Form>
  );
}
