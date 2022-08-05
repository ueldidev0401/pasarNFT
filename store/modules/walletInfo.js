import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { set: false, data: {} } };

const walletSlice = createSlice({
    name: 'walletInfo',
    initialState,
    reducers: {
        setWalletInfo: (state, action) => { state.value = action.payload },
    },
});

export const { setWalletInfo } = walletSlice.actions;
export default walletSlice.reducer;