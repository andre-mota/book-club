import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_MY_BOOKS_SUCCESS = "FETCH_MY_BOOKS_SUCCESS";

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
})
export const fetchMyBooksSuccess = (books) => ({
  type: FETCH_MY_BOOKS_SUCCESS,
  payload: books,
})

export const fetchBooks = () => {
  return async (dispatch, getState) => {
    try {
      const request = `${apiUrl}/books`;
      console.log(request);
      const response = await axios.get(
        request
      );

      console.log(response.data);
      dispatch(fetchBooksSuccess(response.data.books));
    } catch (e) {
      console.log(e.message);
    }
  };
};
export const fetchMyBooks = () => {
  return async (dispatch, getState) => {
    try {
      const { token } = selectUser(getState());
      const request = `${apiUrl}/books/user`;
      console.log(request);
      const response = await axios.get(
        request,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      dispatch(fetchMyBooksSuccess(response.data.books));
    } catch (e) {
      console.log(e.message);
    }
  };
};