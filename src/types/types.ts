import { combineSlices } from "@reduxjs/toolkit";

export type LocalNames = {
    [key: string]: string;
}
export type LocationItem = {
    name: string;
    local_names: LocalNames;
    lat: number;
    lon: number;
    country: string;
    state: string;
}
export type Coord = {
    lon: number;
    lat: number;
}

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export type Wind = {
    speed: number;
    deg: number;
    gust: number;
}

export type Clouds = {
    all: number;
}

export type Sys = {
    country: string;
    sunrise: number;
    sunset: number;
}

export type WeatherData = {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}



export type WeatherResponse = {
    cod: string;
    message: number;
    cnt: number;
    city: City;
    list: weatherItems[] | any;

}

export type weatherItems = {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: WeatherDescription[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string
}

export type WeatherDataAny = {
    list: any;
}
export type WeatherDescription = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type City = {
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

export type CustomDateTime = {
    day: string;
    dayName: string;
    month: string;
    year: number;
    hours: string;
    minutes: string;
    seconds: string;
  }

  export type CurrentWeatherProps = {
  lat: number;
  lon: number;
}

export type LocalNamess = {
  [key: string]: string;
}

export type LocationData = {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type APIResponse = {
  data: LocationData[];
  status: number;
  statusText: string;
  headers: {
    [key: string]: string;
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

export type LocationItems = {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

  export type MainType = {
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

  // Define types for weather object
 export type WeatherType = {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  // Define types for clouds object
  export type CloudsType = {
    all: number;
  }

  // Define types for wind object
  export type WindType = {
    speed: number;
    deg: number;
    gust: number;
  }

  // Define types for sys object
  export type SysType = {
    pod: string;
  }

  // Define types for the overall weather data object
  export type WeatherDatas = {
    dt: number;
    main: MainType;
    weather: WeatherType[];
    clouds: CloudsType;
    wind: WindType;
    visibility: number;
    pop: number;
    sys: SysType;
    dt_txt: string;
  }

//   slices
export type Coords = {
    lon: number;
    lat: number;
  }
  
  export type Weathers = {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export type Mains = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }
  
  export type Winds = {
    speed: number;
    deg: number;
    gust: number;
  }
  
  export type Cloudss = {
    all: number;
  }
  
  export type Syss = {
    country: string;
    sunrise: number;
    sunset: number;
  }
  
  export type weatherdata = {
    list(list: any): unknown;
    coord: Coords;
    weather: Weathers[];
    base: string;
    main: Mains;
    visibility: number;
    wind: Winds;
    clouds: Cloudss;
    dt: number;
    sys: Syss;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }


