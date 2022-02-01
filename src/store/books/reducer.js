/* eslint-disable import/no-anonymous-default-export */
import { FETCH_BOOKS_SUCCESS, FETCH_MY_BOOKS_SUCCESS } from "./actions";

const initialState = { allBooks: [], myBooks: [], bookDetails: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        allBooks: [...action.payload],
      };
    case FETCH_MY_BOOKS_SUCCESS:
      return {
        ...state,
        myBooks: [...action.payload],
      };

    default:
      return state;
  }
};
