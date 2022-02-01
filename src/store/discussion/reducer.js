import { DISCUSSION_DATA } from "./actions";

const initialState = {
  discussionId: null,
};

export default function Search(state = initialState, action) {
  switch (action.type) {
    case DISCUSSION_DATA:
      return {
        ...state,
        discussionId: action.payload.discussionId,
      };
    default:
      return state;
  }
}
