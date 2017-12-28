import { Events } from '../constants';

const initialState = {
  fetched: false,
  projectsList: [],
  error: null
}

const product = (state = initialState , action) => {
  const { type, payload } = action;

  switch(type) {
    case Events.PRODUCT.SUCCESS:
      return { ...state, fetched: true, projectsList: payload };
    case Events.PRODUCT.ERROR:
      return { ...state, fetched: false, error: payload };
    default:
      return state;
  }
}

export default product;