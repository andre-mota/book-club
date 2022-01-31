import { SEARCH_ADD_BOOKS } from "./actions";

const initialState = {
  list: [],
};

export default function Search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ADD_BOOKS:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
}
