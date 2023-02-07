
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
  num_male:0,
  num_female:0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   genderCounts(state,action) {
     state.num_male = action.payload.male;
     state.num_female = action.payload.female;
    }
  },
});

const store = configureStore({
    reducer : { counter: counterSlice.reducer}
});

export const counterActions = counterSlice.actions;

export default store;