import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { set: false, data: {} } };

const networkSlice = createSlice({
    name: 'networkInfo',
    initialState,
    reducers: {
        setNetworkInfo: (state, action) => { state.value = action.payload },
    },
});

export const { setNetworkInfo } = networkSlice.actions;
export default networkSlice.reducer;