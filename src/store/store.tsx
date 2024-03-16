import optionSlice from "./OptionSlice";
import currentWeatherSlice from "./CurrentWeatherSlice";
import forecastWeatherSlice from "./WeatherForecastSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    options: optionSlice,
    CurrentWeather: currentWeatherSlice,
    WeatherForecast: forecastWeatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
