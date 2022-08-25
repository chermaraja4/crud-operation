import { combineReducers } from "redux";

import Reducer from "./User/user.reducer";

const RootReducer = combineReducers({
  User: Reducer,
});
export default RootReducer;