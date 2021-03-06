import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

export interface ImageInputState {
  status: "idle" | "loading" | "failed";
  value: number;
}

const initialState: ImageInputState = {
  status: "idle",
  value: 0,
};

export const imageInputSlice = createSlice({
  name: "imageInput",
  initialState,
  reducers: {},
});

export const {} = imageInputSlice.actions;

export default imageInputSlice.reducer;
