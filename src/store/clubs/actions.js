import axios from "axios";
import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";

export const FETCH_CLUBS_SUCCESS = "FETCH_CLUBS_SUCCESS";
export const FETCH_MY_CLUBS_SUCCESS = "FETCH_MY_CLUBS_SUCCESS";

export const fetchClubsSuccess = (clubs) => ({
  type: FETCH_CLUBS_SUCCESS,
  payload: clubs,
})
export const fetchMyClubsSuccess = (clubs) => ({
  type: FETCH_MY_CLUBS_SUCCESS,
  payload: clubs,
})

export const fetchClubs = () => {
  return async (dispatch, getState) => {
    try {
      const clubsCount = getState().clubs.allClubs.length;
      const response = await axios.get(
        `${apiUrl}/clubs?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${clubsCount}`
      );

      console.log(response.data);
      dispatch(fetchClubsSuccess(response.data.clubs));
    } catch (e) {
      console.log(e.message);
    }
  };
};
export const fetchMyClubs = () => {
  return async (dispatch, getState) => {
    try {
    
      const response = await axios.get(
        `${apiUrl}/clubs/user`
      );

      console.log(response.data);
      dispatch(fetchMyClubsSuccess(response.data.clubs));
    } catch (e) {
      console.log(e.message);
    }
  };
};