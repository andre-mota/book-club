/* eslint-disable import/no-anonymous-default-export */
import { FETCH_BOOKCOMMENTS_SUCCESS, COMMENT_POST_SUCCESS } from "./actions";

const initialState = {
  allBookComments: [],
  myBookComments: [],
  bookCommentDetails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKCOMMENTS_SUCCESS:
      return {
        ...state,
        allBookComments: [...state.allBookComments, ...action.payload],
      };
    case COMMENT_POST_SUCCESS:
      return {
        ...state,
        bookComments: {
          ...state.space,
          bookComments: [...state.bookcomments.bookComments, action.payload],
        },
      };
    default:
      return state;
  }
};
