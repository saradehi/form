import { createSlice } from "@reduxjs/toolkit";

export const infoForm = createSlice({
  name: "form",
  initialState: {
    id: "",
    data: {},
  },
  reducers: {
    getInfoId: (state, action) => {
      state.id = action.payload;
    },
    getInfoData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getInfoData, getInfoId } = infoForm.actions;
export default infoForm.reducer;
