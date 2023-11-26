import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice"; // Import the userReducer

const appStore = configureStore({
  reducer: {
    user: userReducer, // Use the userReducer here
  },
});

export default appStore;
