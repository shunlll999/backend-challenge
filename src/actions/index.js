import { Events } from '../constants';

const getProduct = (action) => {
  let dataAction = {}

  switch(action) {
    case 'WOMEN': dataAction = { photo: './assets/images/women.png' }
    break;
    case 'MEN': dataAction = { photo: './assets/images/men.png' }
    break;
    case 'KIDS': dataAction = { photo: './assets/images/kids.png' }
    break;
    case 'FASION': dataAction = { photo: './assets/images/fasion.png' }
    break;
    case 'ACCESSORIES': dataAction = { photo: './assets/images/accessories.png' }
    break;
    default: dataAction = { photo: './assets/images/women.png' }

  }

  return (dispatch) => {
    dispatch({ type: Events.PRODUCT.SUCCESS, payload: [dataAction, dataAction, dataAction, dataAction, dataAction, dataAction, dataAction, dataAction] });
  }
};

export const EventDispatcher = {
  getProduct
}