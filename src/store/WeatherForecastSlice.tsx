import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { Citys, WeatherState } from "../../types/types";
import axios from "axios";
import { APPID } from "../config/config";



// Weather Data Types

// Main weather information
interface MainWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

// Weather details
interface WeatherDetails {
    id: number;
    main: string;
    description: string;
    icon: string;
}

// Cloud information
interface Clouds {
    all: number;
}

// Wind information
interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

// System information
interface Sys {
    pod: string;
}

// Weather Forecast for a specific time
interface WeatherForecast {
    dt: number;
    main: MainWeather;
    weather: WeatherDetails[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
}

// City information
interface City {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

// Weather API Response
interface WeatherApiResponse {
    data: {
        cod: string;
        message: number;
        cnt: number;
        list: WeatherForecast[];
        city: City;
    };
    status: number;
    statusText: string;
    headers: {
        "content-length": string;
        "content-type": string;
    };
    config: {
        transitional: {
            silentJSONParsing: boolean;
            forcedJSONParsing: boolean;
            clarifyTimeoutError: boolean;
        };
        adapter: string[];
        transformRequest: null[];
        transformResponse: null[];
        timeout: number;
        xsrfCookieName: string;
        xsrfHeaderName: string;
        maxContentLength: number;
        maxBodyLength: number;
        env: {};
        headers: {
            Accept: string;
        };
        method: string;
        url: string;
    };
    request: {};
}

export interface WeatherState {
    data: WeatherApiResponse | null,
    loading: boolean,
    error: string | null
}


const initialState: WeatherState = {
    data: null,
    loading: true,
    error: "",
};

export const getWeatherForecast = createAsyncThunk(
    "getWeatherForecast",
    async ({ lat, lon }: { lat: number, lon: number }) => {
        const res =
            await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID}`)
        return res.data
    }
);



export const forecastWeatherSlice = createSlice({
    name: "WeatherForecast",
    initialState,
    reducers: {},
    extraReducers(builder: any) {
        builder
            // new options end
            .addCase(getWeatherForecast.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(getWeatherForecast.fulfilled, (state: any, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload as WeatherState;
            })
            .addCase(getWeatherForecast.rejected, (state: any, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
                state.data = {};
            });
    },
});

export default forecastWeatherSlice.reducer;






