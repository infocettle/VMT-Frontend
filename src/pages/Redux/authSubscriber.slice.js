import { createSlice } from '@reduxjs/toolkit';
const authSubscriberSlice = createSlice({
  name: 'authSubscriber',
  initialState: {
    newUser: null,
    authenticated: false,
    token: null,
    // subscriptionStatus: 'inactive', // Initialize subscription status as 'inactive'
  },
  reducers: {
    setUserSubscriber: (state, action) => {
      state.newUser = action.payload;
      state.authenticated = action.payload ? true : false;
      state.token = null;
    },

    setUpdatedUserSubscriber: (state, action) => {
      state.newUser = action.payload;
      state.authenticated = true;
      state.token = null;
    },
    setTokenSubscriber: (state,action) => {
      state.newUser = null;
      state.authenticated = false;
      state.token = action.payload
      // state.subscriptionStatus = 'inactive'; // Reset the subscription status upon logout
    },

    // // Extend the authSubscriberSlice with a new action to set the subscription status
    // setSubscriptionStatus: (state, action) => {
    //   state.subscriptionStatus = action.payload;
    // },

    logOutUserSubscriber: (state) => {
      state.newUser = null;
      state.authenticated = false;
      state.token = null;
      // state.subscriptionStatus = 'inactive'; // Reset the subscription status upon logout
    },
  },
});

export const authReducer = authSubscriberSlice.reducer;

export const { setUserSubscriber, logOutUserSubscriber,setTokenSubscriber } = authSubscriberSlice.actions;
