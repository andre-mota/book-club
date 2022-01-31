// src/store/search/actions

import { apiUrl, openLibraryBooksApiUrl } from "../../config/constants";
import axios from "axios";

import { selectToken } from "../user/selectors";
import { selectUser } from "../user/selectors";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

/* Recommend 5 initial books */
// Type
export const SEARCH_INITIAL_BOOKS = "books/INITIAL";

// update the store
export function initialBooks() {
  return {
    type: SEARCH_INITIAL_BOOKS,
    payload: [
      "Harry Potter and the Deathly Hallows",
      "A Game of Thrones",
      "CSS Web Design for Dummies",
      "The Power of Now",
      "The Power Of Habit",
    ],
  };
}

/* GET books from external API */
// Type
export const SEARCH_ADD_BOOKS = "books/ADD";

// Update the store
export function booksFetched(booksFromAPI) {
  return {
    type: SEARCH_ADD_BOOKS,
    payload: booksFromAPI,
  };
}

// Fetching
export const fetchBooksByTitle = (searchText) => {
  return async (dispatch, getState) => {
    // Set app state as 'loading' until we can display the new data
    dispatch(appLoading());
    try {
      const searchTitle = searchText.replace(/ /g, "+");
      const url = `${openLibraryBooksApiUrl}?fields=title,lccn,cover_i&limit=5&title=${searchTitle}`;

      // Query the API
      const response = await axios.get(url);

      // Update the store with all the new crypto assets details
      // const { lccn, title: label } = response.data.docs;

      const fetchedBooks = response.data.docs.map(function (book) {
        // return an object with lccn, coverId and label (title). label will be used on the search bar
        return {
          lccn: book.lccn,
          coverId: book.cover_i,
          label: book.title,
        };
      });
      dispatch(booksFetched(fetchedBooks));

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

// Create New Discussion
export const createNewDiscussion = (bookdLccn, bookTitle, bookCoverUrl) => {
  return async (dispatch, getState) => {
    // Get token from the state
    const token = selectToken(getState());

    dispatch(appLoading());
    try {
      const response = await axios.post(
        `${apiUrl}/books`,
        {
          lccn: bookdLccn,
          title: bookTitle,
          coverUrl: bookCoverUrl,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(showMessageWithTimeout("success", true, "Discussion created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
