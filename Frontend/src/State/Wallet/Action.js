import axios from "axios";

import api, { API_BASE_URL } from "@/config/api";
import * as types from "./ActionTypes";

export const getUserWallet = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_USER_WALLET_REQUEST });

  try {
    const response = await api.get("/api/wallet", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({ type: types.GET_USER_WALLET_SUCCESS, payload: response.data });
    console.log("User wallet",response.data);
    
  } catch (error) {
    dispatch({ type: types.GET_USER_WALLET_FAILURE, error: error.message });
  }
};

export const getWalletTransaction =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_WALLET_TRANSACTION_REQUEST });

    try {
      const response = await api.get("/api/transactions", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({
        type: types.GET_WALLET_TRANSACTION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: types.GET_WALLET_TRANSACTION_FAILURE,
        error: error.message,
      });
      console.log(error);
    }
  };

export const depositeMoney =
  ({ jwt, orderId, paymentId, navigate }) =>
  async (dispatch) => {
    dispatch({ type: types.DEPOSIT_MONEY_REQUEST });

    try {
      const response = await api.put(`/api/wallet/deposite`, null, {
        params: {
          order_id: orderId,
          paymentid: paymentId,
        },

        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: types.DEPOSIT_MONEY_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.DEPOSIT_MONEY_FAILURE, message: error.message });
      console.log(error);
    }
  };

export const paymentHandler =
  ({ jwt, amount, paymentMethod }) =>
  async (dispatch) => {
    dispatch({ type: types.DEPOSIT_MONEY_REQUEST });

    try {
      const response = await api.post(
        `/api/payment/${paymentMethod}/amount/${amount}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      window.location.href = response.data.payment_url;

      //   dispatch({ type: types.DEPOSIT_MONEY_SUCCESS, payload: response.data });
      //   console.log("Fetch coin by id : ", response.data);
    } catch (error) {
      dispatch({ type: types.DEPOSIT_MONEY_FAILURE, error: error.message });
      console.log(error);
    }
  };

export const transferMoney =
  ({ jwt, walletId, reqData }) =>
  async (dispatch) => {
    dispatch({ type: types.TRANSFER_MONEY_REQUEST });

    try {
      const response = await api.put(
        `/api/wallet/${walletId}/transfer`,
        reqData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      dispatch({ type: types.TRANSFER_MONEY_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.TRANSFER_MONEY_FAILURE, error: error.message });
      console.log(error);
    }
  };
