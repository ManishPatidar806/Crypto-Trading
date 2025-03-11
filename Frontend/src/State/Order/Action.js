

import api, { API_BASE_URL } from "@/config/api";
import * as types from "./ActionTypes";

export const payOrder = ({jwt , orderData,amount}) => async (dispatch) => {
  dispatch({ type: types.PAY_ORDER_REQUEST });

  try {
    const response = await api.post("/api/order/pay",orderData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({ type: types.PAY_ORDER_SUCCESS, payload: response.data,amount });
    console.log("Pay Order",response.data);
    
  } catch (error) {
    dispatch({ type: types.PAY_ORDER_FAILURE, error: error.message });
  }
};

// export const getOrderById =
//   ({ jwt , orderId }) =>
//   async (dispatch) => {
//     dispatch({ type: types.GET_ORDER_REQUEST});

//     try {
//       const response = await api.get(`/api/orders/${orderId}`, {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       });

//       dispatch({
//         type: types.GET_ORDER_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: types.GET_ORDER_FAILURE,
//         error: error.message,
//       });
//       console.log(error);
//     }
//   };

export const getAllOrderForUser =
  ({ jwt, orderType,assetSymbol }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_ALL_ORDERS_REQUEST });

    try {
      const response = await api.get(`/api/orders`, {
        params: {
          order_type: orderType,
          asset_symbol: assetSymbol,
        },

        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: types.GET_ALL_ORDERS_SUCCESS, payload: response.data });
      console.log("GET ALL ORDER FOR USER",response.data);
      
    } catch (error) {
      dispatch({ type: types.GET_ALL_ORDERS_FAILURE, message: error.message });
      console.log(error);
    }
  };

