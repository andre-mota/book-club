import axios from "axios";
import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";

export const FETCH_DISCUSSIONS_SUCCESS = "FETCH_DISCUSSIONS_SUCCESS";
export const FETCH_MY_DISCUSSIONS_SUCCESS = "FETCH_MY_DISCUSSIONS_SUCCESS";

export const fetchDiscussionsSuccess = (comments) => ({
  type: FETCH_DISCUSSIONS_SUCCESS,
  payload: comments,
})
export const fetchMyDiscussionsSuccess = (comments) => ({
  type: FETCH_MY_DISCUSSIONS_SUCCESS,
  payload: comments,
})

export const fetchDiscussions = () => {
  return async (dispatch, getState) => {
    try {
      // const discussionsCount = getState().comments.allDiscussions.length;
      const response = await axios.get(
        `${apiUrl}/bookComments`
      );

      console.log(response.data);
      dispatch(fetchDiscussionsSuccess(response.data.comments));
    } catch (e) {
      console.log(e.message);
    }
  };
};
export const fetchMyDiscussions = () => {
  return async (dispatch, getState) => {
    try {
    
      const response = await axios.get(
        `${apiUrl}/bookComments/user`
      );

      console.log(response.data);
      dispatch(fetchMyDiscussionsSuccess(response.data.comments));
    } catch (e) {
      console.log(e.message);
    }
  };
};