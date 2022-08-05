import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { set: false, data: {} } };

const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action) => { state.value = action.payload },
    },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;