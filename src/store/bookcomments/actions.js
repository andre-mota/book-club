import axios from "axios";
import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import { selectToken, selectUser } from "../user/selectors";

import { selectBooks } from "../books/selectors";

export const FETCH_BOOKCOMMENTS_SUCCESS = "FETCH_BOOKCOMMENTS_SUCCESS";
export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCESS";

export const fetchBookCommentsSuccess = (bookComments) => ({
  type: FETCH_BOOKCOMMENTS_SUCCESS,
  payload: bookComments,
});

export const fetchBookComments = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/bookComments/`);

      console.log(response.data);
      dispatch(fetchBookCommentsSuccess(response.data.bookComments));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const commentPostSuccess = (comment) => ({
  type: COMMENT_POST_SUCCESS,
  payload: comment,
});

export const postComment = (comment, id) => {
  return async (dispatch, getState) => {
    try {
      const { userId, token } = selectUser(getState());
      console.log(id);

      const response = await axios.post(
        `${apiUrl}/bookComments/${id}`,
        {
          comment,
          userId,
          id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response);

      // dispatch(commentPostSuccess(response.data.comment));
    } catch (e) {
      console.log(e.message);
    }
  };
};
