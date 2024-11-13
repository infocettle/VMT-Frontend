import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("authToken");

console.log(initialToken);

const authSubscriberSlice = createSlice({
  name: "authSubscriber",
  initialState: {
    user: null,
    authenticated: false,
    token: initialToken || null,
    // subscriptionStatus: 'inactive', // Initialize subscription status as 'inactive'
  },
  reducers: {
    setUserSubscriber: (state, action) => {
      state.user = action.payload;
      state.authenticated = action.payload ? true : false;
      state.token = null;
    },

    setUpdatedUserSubscriber: (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
      state.token = null;
    },
    setTokenSubscriber: (state, action) => {
      localStorage.setItem("authToken", action.payload.token);
      state.user = action.payload ? action.payload.user : false;
      state.authenticated = action.payload ? true : false;
      state.token = action.payload.token;
      // state.subscriptionStatus = 'inactive'; // Reset the subscription status upon logout
    },

    // // Extend the authSubscriberSlice with a new action to set the subscription status
    // setSubscriptionStatus: (state, action) => {
    //   state.subscriptionStatus = action.payload;
    // },

    logOutUserSubscriber: (state) => {
      state.user = null;
      state.authenticated = false;
      state.token = null;
      // state.subscriptionStatus = 'inactive'; // Reset the subscription status upon logout
    },
  },
});

export const authReducer = authSubscriberSlice.reducer;

export const { setUserSubscriber, logOutUserSubscriber, setTokenSubscriber } =
  authSubscriberSlice.actions;
