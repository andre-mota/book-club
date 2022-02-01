/* eslint-disable import/no-anonymous-default-export */
import { FETCH_CLUBS_SUCCESS, FETCH_MY_CLUBS_SUCCESS } from "./actions";

const initialState = { allClubs: [], myClubs: [], clubDetails: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLUBS_SUCCESS:
      return {
        ...state,
        allClubs: [...state.allClubs, ...action.payload],
      };
    case FETCH_MY_CLUBS_SUCCESS:
      return {
        ...state,
        myClubs: [...state.myClubs, ...action.payload],
      };

    default:
      return state;
  }
};
