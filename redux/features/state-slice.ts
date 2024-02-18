import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

type UserState = {
  userId: string;
  userName: string;
  users: User[];
  onboarded: boolean;
};

const initialUserState = {
  userId: "",
  userName: "",
  users: [],
  onboarded: false,
};

export const initialState: UserState = {
  ...initialUserState,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setOnboarded: (state, action) => {
      state.onboarded = action.payload;
    },
    resetState: () => initialState,
  },
  selectors: {
    selectUserId: (state) => state.userId,
    selectUserName: (state) => state.userName,
    selectUsers: (state) => state.users,
    selectIsOnboarded: (state) => state.onboarded,
  },
});
export const { selectUserId, selectUserName, selectUsers, selectIsOnboarded } = userSlice.selectors;

export const { setUserId, setUserName, setUsers, setOnboarded, resetState } = userSlice.actions;
export const userReducer = userSlice.reducer;

