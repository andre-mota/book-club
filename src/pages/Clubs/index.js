import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchBookComments } from "../../store/BookComments/actions";
// import { selectBookComments } from "../../store/BookComments/selectors";
import BookComment from "../../components/BookComment/";

export default function Clubs() {
  // not fetch with hook but with redux --> goes into action. Needs to be fetched with thunk.
  //F1.3.
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  bookComments = useSelector(selectBookComments);

  useEffect(() => {
    // dispatch a "thunk action" by calling the "thunk action creator" named `fetchBookComments`
    dispatch(fetchBookComments()); // goes to `redux-thunk`
  }, [dispatch]);

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Jumbotron>
        <h1>Clubs</h1>
      </Jumbotron>
      <Container>
        {/* input, call action, action does, post request */}
        <input type="text" value={filter} onChange={updateFilter} />

        {bookComments
          .filter((bookCommentsObj) => bookCommentsObj.name.startsWith(filter))
          .map((bookComment) => {
            return (
              <BookComment
                key={bookComment.id}
                name={bookComment.user.name}
                comment={bookComment.comment}
              />
            );
          })}
      </Container>
    </>
  );
}
