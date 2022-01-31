/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_DISCUSSIONS_SUCCESS, FETCH_MY_DISCUSSIONS_SUCCESS,

} from "./actions";

const initialState = { allDiscussions: [], myDiscussions: [], discussionDetails: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCUSSIONS_SUCCESS:
      return {
        ...state,
        allDiscussions: [...state.allDiscussions, ...action.payload],
      };
      case FETCH_MY_DISCUSSIONS_SUCCESS:
      return {
        ...state,
        myDiscussions: [...state.myDiscussions, ...action.payload],
      };
    
    default:
      return state;
  }
};