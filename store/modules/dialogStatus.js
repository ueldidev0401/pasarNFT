import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { walletDiag: false, } };

const dialogSlice = createSlice({
    name: 'dialogStatus',
    initialState,
    reducers: {
        setDialog: (state, action) => { state.value = action.payload },
    },
});

export const { setDialog } = dialogSlice.actions;
export default dialogSlice.reducer;