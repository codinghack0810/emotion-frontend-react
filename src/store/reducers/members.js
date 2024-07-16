import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberinfo";

const store = configureStore({
    reducer: {
        memberinfo: memberReducer,
    },
});

export default store;