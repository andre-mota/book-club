// src/store/search/actions

import { openLibraryBooksApiUrl } from "../../config/constants";
import axios from "axios";

import { selectToken } from "../user/selectors";
import { selectUser } from "../user/selectors";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

/* GET books from external API */
// Type
export const SEARCH_ADD_BOOKS = "books/ADD";

// Update the store
export function booksFetched(bookFromAPI) {
  return {
    type: SEARCH_ADD_BOOKS,
    payload: bookFromAPI,
  };
}

// Fetching
export const fetchBooksByTitle = (searchText) => {
  return async (dispatch, getState) => {
    // Get token from the state
    const token = selectToken(getState());
    if (token === null) return;

    // Set app state as 'loading' until we can display the new data
    dispatch(appLoading());
    try {
      const searchTitle = searchText.replace(/ /g, "+");
      console.log(searchTitle);
      // Query the API
      const response = await axios.get(
        `${openLibraryBooksApiUrl}?title=${searchTitle}`
      );

      // Update the store with all the new crypto assets details
      dispatch(booksFetched(response.docs));

      // App state is no longer loading
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }

      dispatch(appDoneLoading());
    }
  };
};
