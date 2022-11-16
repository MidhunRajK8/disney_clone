import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"

console.log("reducer", userReducer)
export default configureStore({
  reducer: {
    user: userReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
