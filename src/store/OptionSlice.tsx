import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



interface LocalNames {
  de?: string;
  ar?: string;
  lt?: string;
  fr?: string;
  et?: string;
  ur?: string;
  ml?: string;
  cs?: string;
  zh?: string;
  ja?: string;
  hi?: string;
  nl?: string;
  en?: string;
  it?: string;
  ru?: string;
  uk?: string;
  oc?: string;
  es?: string;
}

interface Location {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

interface City {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

interface Chak {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}
interface data {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export type LocationType =data | LocalNames | Location | City | Chak;





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
      await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=3&appid=5835ce7cca6e008a5ce418d6f91eaefa`)
    return res
    }
    );

// New action to clear previous options
export const getOptionsStart = createAsyncThunk("getOptionsStart", async () => {
  return {};
});

export const optionSlice = createSlice({
  name: "options",
  initialState,
  reducers: {},
  extraReducers(builder:any) {
    builder
      // new options start
      .addCase(getOptionsStart.pending, (state:any) => {
        state.loading = true;
      })
      .addCase(getOptionsStart.fulfilled, (state:any) => {
        state.loading = false;
        state.error = null;
        state.data = []; // Clear previous options
      })
      .addCase(
        getOptionsStart.rejected,
        (state:any, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.data = {};
        }
      )
      // new options end
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

