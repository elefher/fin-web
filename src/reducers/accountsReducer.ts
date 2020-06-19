import {
  ADD_ACCOUNT,
  FETCH_ACCOUNTS,
  DELETE_ACCOUNT,
  UPDATE_ACCOUNT,
} from "../constants";

export default (state: Array<any> = [], action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      return action.payload;
    case ADD_ACCOUNT:
      return [...state, action.payload];
    case DELETE_ACCOUNT:
      return state.filter((account) => account.id !== action.payload);
    case UPDATE_ACCOUNT:
      return state.map((i: Account) => {
        if (i.id === action.payload.id) {
          return action.payload;
        }
        return i;
      });
    default:
      return state;
  }
};
