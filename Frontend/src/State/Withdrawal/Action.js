import axios from "axios";
import api, { API_BASE_URL } from "@/config/api";
import * as types from "./ActionTypes";

export const withdrawalRequest =
  ({ amount, jwt }) =>
  async (dispatch) => {
    dispatch({ type: types.WITHDRAWAL_REQUEST });

    try {
      const response = await api.post(`/api/withdrawal/${amount}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: types.WITHDRAWAL_SUCCESS, payload: response.data });
      console.log("User wallet", response.data);
    } catch (error) {
      dispatch({ type: types.WITHDRAWAL_FAILURE, payload: error.message });
    }
  };

export const proceedWithdrawal =
  ({ id, jwt, accept }) =>
  async (dispatch) => {
    dispatch({ type: types.WITHDRAWAL_PROCEED_REQUEST });

    try {
      const response = await api.patch(
        `/api/admin/withdrawal/${id}/proceed/${accept}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      dispatch({
        type: types.WITHDRAWAL_PROCEED_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: types.WITHDRAWAL_PROCEED_FAILURE,
        error: error.message,
      });
      console.log(error);
    }
  };

export const getWithdrawalHistory = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_WITHDRAWAL_HISTORY_REQUEST });

  try {
    const response = await api.get(`/api/withdrawal`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_WITHDRAWAL_HISTORY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_WITHDRAWAL_HISTORY_FAILURE,
      message: error.message,
    });
    console.log(error);
  }
};

export const getAllWithdrawalRequest = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_WITHDRAWAL_REQUEST_REQUEST });

  try {
    const response = await api.get(`/api/admin/withdrawal`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_WITHDRAWAL_REQUEST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_WITHDRAWAL_REQUEST_FAILURE,
      error: error.message,
    });
    console.log(error);
  }
};

export const addPaymentDetails =
  ( paymentDetails,jwt ) =>
  async (dispatch) => {
    dispatch({ type: types.ADD_PAYMENT_DETAILS_REQUEST });

    try {
      const response = await api.post(
        `/api/payment-details`,paymentDetails,
        
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );


      dispatch({ type: types.ADD_PAYMENT_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.ADD_PAYMENT_DETAILS_FAILURE, error: error.message });
      console.log(error);
    }
  };

  export const getPaymentDetails = ({jwt}) => async (dispatch) => {
    dispatch({ type: types.GET_PAYMENT_DETAILS_REQUEST });
  
    try {
      const response = await api.get(`/api/payment-details`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({
        type: types.GET_PAYMENT_DETAILS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: types.GET_PAYMENT_DETAILS_FAILURE,
        error: error.message,
      });
      console.log(error);
    }
  };