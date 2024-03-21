import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WeatherApiResponse } from "../types/types";
import axiosInstance from "../instance/AxiosInstance";

export interface WeatherState {
  data: WeatherApiResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: true,
  error: "",
};

export const getWeatherForecast = createAsyncThunk(
  "getWeatherForecast",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const res = await axiosInstance.get(
      `data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5835ce7cca6e008a5ce418d6f91eaefa`
    );
    return res.data;
  }
);

export const forecastWeatherSlice = createSlice({
  name: "WeatherForecast",
  initialState,
  reducers: {},
  extraReducers(builder: any) {
    builder
      .addCase(getWeatherForecast.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(
        getWeatherForecast.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload as WeatherState;
        }
      )
      .addCase(
        getWeatherForecast.rejected,
        (state: any, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.data = {};
        }
      );
  },
});

export default forecastWeatherSlice.reducer;
