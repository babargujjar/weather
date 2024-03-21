import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LocationType } from "../types/types";
import axiosInstance from "../instance/AxiosInstance";


export interface WeatherState {
  data:LocationType[] | null,
  loading:boolean,
  error:string | null
}


const initialState: WeatherState = {
  data: null,
  loading: true,
  error: "",
};

export const getOptions = createAsyncThunk(
  "getOptions",
  async (value:string) => {
   const res=
      await axiosInstance.get(`geo/1.0/direct?q=${value}&limit=3&appid=5835ce7cca6e008a5ce418d6f91eaefa`)
    return res
    }
    );


export const getOptionsStart = createAsyncThunk("getOptionsStart", async () => {
  return {};
});

export const optionSlice = createSlice({
  name: "options",
  initialState,
  reducers: {},
  extraReducers(builder:any) {
    builder
    
      .addCase(getOptionsStart.pending, (state:any) => {
        state.loading = true;
      })
      .addCase(getOptionsStart.fulfilled, (state:any) => {
        state.loading = false;
        state.error = null;
        state.data = []; 
      })
      .addCase(
        getOptionsStart.rejected,
        (state:any, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.data = {};
        }
      )
     
      .addCase(getOptions.pending, (state:any) => {
        state.loading = true;
      })
      .addCase(getOptions.fulfilled, (state:any, action:PayloadAction<any>) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getOptions.rejected, (state:any, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = {};
      });
  },
});

export default optionSlice.reducer;

