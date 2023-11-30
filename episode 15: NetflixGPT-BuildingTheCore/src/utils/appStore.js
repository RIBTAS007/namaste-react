import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the userReducer
import moviesReducer from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer, // Use the userReducer here
    movies: moviesReducer,
  },
});

export default appStore;
