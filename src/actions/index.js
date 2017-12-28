import { Events } from '../constants';

const getProduct = (action) => {
  return (dispatch) => {
    dispatch({ type: Events.PRODUCT.SUCCESS, payload: { action: action} });
  }
};

export const EventDispatcher = {
  getProduct
}