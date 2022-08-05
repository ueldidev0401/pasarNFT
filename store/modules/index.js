import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import counter from "./counter";
import walletInfo from "./walletInfo";
import dialogStatus from "./dialogStatus";
import userInfo from "./userInfo";
import networkInfo from "./networkInfo";

const reducer = (state, action) => {
    if(action.type === HYDRATE){
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        counter,
        walletInfo,
        userInfo,
        networkInfo,
        dialogStatus,
    })(state, action)
}

export default reducer;