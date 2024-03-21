import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { weatherdata } from "../types/types";
import axiosInstance from "../instance/AxiosInstance";

export interface WeatherState {
  data: weatherdata | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: true,
  error: "",
};

export const getCurrentWeather = createAsyncThunk(
  "getCurrentWeather",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const res = await axiosInstance.get(
      `data/2.5/weather?lat=${lat}&lon=${lon}&appid=5835ce7cca6e008a5ce418d6f91eaefa`
    );
    return res.data;
  }
);

export const currentWeatherSlice = createSlice({
  name: "CurrentWeather",
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder
      .addCase(getCurrentWeather.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(
        getCurrentWeather.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload;
        }
      )
      .addCase(
        getCurrentWeather.rejected,
        (state: any, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.data = {};
        }
      );
  },
});

export default currentWeatherSlice.reducer;
