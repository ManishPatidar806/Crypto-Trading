import api, { API_BASE_URL } from "@/config/api";
import * as types from "./ActionTypes";

export const getUserWatchlist = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_USER_WATCHLIST_REQUEST });

  try {
    const response = await api.get(`/api/watchlist/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_USER_WATCHLIST_SUCCESS,
      payload: response.data,
    });
    console.log("GET USER WATCHLIST  : ", response.data);
  } catch (error) {
    dispatch({ type: types.GET_USER_WATCHLIST_FAILURE, error: error.message });
  }
};

export const addItemToWatchList =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: types.ADD_COIN_TO_WATCHLIST_REQUEST });

    try {
      const response = await api.post(
        `/api/watchlist/add/coin/${coinId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      dispatch({
        type: types.ADD_COIN_TO_WATCHLIST_SUCCESS,
        payload: response.data,
      });
      console.log("ADD item to watchList", response.data);
    } catch (error) {
      dispatch({
        type: types.ADD_COIN_TO_WATCHLIST_FAILURE,
        error: error.message,
      });
      console.log(error);
    }
  };
