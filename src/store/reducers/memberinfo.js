import { createSlice } from "@reduxjs/toolkit";
 
const memberInfo = createSlice({
    name: 'memberinfo',
    initialState: [],
    reducers: {
        checkUser(state, action) {
            state = action.payload;
            return state;
        }
    }
});

export const { checkUser } = memberInfo.actions;
export default memberInfo.reducer;