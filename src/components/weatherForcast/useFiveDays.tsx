import { useAppDispatch, useAppSelector } from "../../hooks";
import { getWeatherForecast } from "../../store/WeatherForecastSlice";
import { useEffect } from "react";
import { WeatherDatas } from "../../types/types";
import {
  clearDaySun,
  clearNightMoon,
  cloudy,
  cloudyDay,
  cloudyNight,
  fewCloudyDay,
  fewCloudyNight,
  mistDay,
  mistNight,
  rainDay,
  rainNight,
  snowDay,
  snowNight,
  stormDay,
  stormNight,
} from "../../assets/constants/constants";

const useFiveDays = ({ lat, lon }: any) => {

  const dispatch = useAppDispatch();
  const weatherForecast: any = useAppSelector(
    (state) => state.WeatherForecast.data
  );

  useEffect(() => {
    dispatch(getWeatherForecast({ lat, lon }));
  }, [lat, lon, dispatch]);

  const getNextDays = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const nextDays = [];

    for (let i = 1; i <= 5; i++) {
      const nextDayIndex = (currentDate.getDay() + i) % 7;
      const dayName = i === 1 ? "Tomorrow" : daysOfWeek[nextDayIndex];
      nextDays.push(dayName);
    }
    return nextDays;
  };

  const nextDays = getNextDays();
  let nextDayOne = nextDays[0];
  let nextDayTwo = nextDays[1];
  let nextDayThree = nextDays[2];
  let nextDayFour = nextDays[3];
  let nextDayFifth = nextDays[4];

  const weatherIconCondition = (dayIcon: string) => {
    switch (dayIcon) {
      case "01d":
        return clearDaySun;
      case "01n":
        return clearNightMoon;
      case "02d":
        return fewCloudyDay;
      case "02n":
        return fewCloudyNight;
      case "03d":
        return cloudyDay;
      case "03n":
        return cloudyNight;
      case "04d":
        return fewCloudyDay;
      case "04n":
        return fewCloudyNight;
      case "09d":
        return rainDay;
      case "09n":
        return rainNight;
      case "10d":
        return rainDay;
      case "10n":
        return rainNight;
      case "11d":
        return stormDay;
      case "11n":
        return stormNight;
      case "13d":
        return snowDay;
      case "13n":
        return snowNight;
      case "50d":
        return mistDay;
      case "50n":
        return mistNight;
      default:
        return cloudy;
    }
  };

  const uniqueFiveForecastDays: number[] = [];
  let list = weatherForecast?.list;

  const sixDayForecast = (list ?? []).filter((forecast: WeatherDatas) => {
    const forecastDate = new Date(forecast.dt_txt).getDate();
    if (!uniqueFiveForecastDays.includes(forecastDate)) {
      uniqueFiveForecastDays.push(forecastDate);
      return true;
    }
    return false;
  });

  let fiveDaysForcast = sixDayForecast.slice(1);

  let firstDay = fiveDaysForcast[0];
  let secondDay = fiveDaysForcast[1];
  let thirdDay = fiveDaysForcast[2];
  let forthDay = fiveDaysForcast[3];
  let fifthDay = fiveDaysForcast[4];

  const kelvinToCelsius = (tempInKelvin: number, decimalPlaces: number = 0) =>
    (tempInKelvin - 273.15).toFixed(decimalPlaces);

  let firstDayIcon =
    firstDay && firstDay.weather && firstDay.weather[0]
      ? firstDay.weather[0].icon
      : "01d";
  let firstDayMaxTemp = firstDay && firstDay.main && firstDay.main.temp_max;
  firstDayMaxTemp = kelvinToCelsius(firstDayMaxTemp);
  let firstDayMinTemp = firstDay && firstDay.main && firstDay.main.temp_min;
  firstDayMinTemp = kelvinToCelsius(firstDayMinTemp);
  let firstDayDescription =
    firstDay &&
    firstDay.weather &&
    firstDay.weather[0] &&
    firstDay.weather[0].description;

  let secondDayIcon =
    secondDay && secondDay.weather && secondDay.weather[0]
      ? secondDay.weather[0].icon
      : "01d";
  let secondDayMaxTemp = secondDay && secondDay.main && secondDay.main.temp_max;
  secondDayMaxTemp = kelvinToCelsius(secondDayMaxTemp);
  let secondDayMinTemp = secondDay && secondDay.main && secondDay.main.temp_min;
  secondDayMinTemp = kelvinToCelsius(secondDayMinTemp);
  let secondDayDescription =
    secondDay &&
    secondDay.weather &&
    secondDay.weather[0] &&
    secondDay.weather[0].description;

  let thirdDayIcon =
    thirdDay && thirdDay.weather && thirdDay.weather[0]
      ? thirdDay.weather[0].icon
      : "01d";
  let thirdDayMaxTemp = thirdDay && thirdDay.main && thirdDay.main.temp_max;
  thirdDayMaxTemp = kelvinToCelsius(thirdDayMaxTemp);
  let thirdDayMinTemp = thirdDay && thirdDay.main && thirdDay.main.temp_min;
  thirdDayMinTemp = kelvinToCelsius(thirdDayMinTemp);
  let thirdDayDescription =
    thirdDay &&
    thirdDay.weather &&
    thirdDay.weather[0] &&
    thirdDay.weather[0].description;

  let forthDayIcon =
    forthDay && forthDay.weather && forthDay.weather[0]
      ? forthDay.weather[0].icon
      : "01d";
  let forthDayMaxTemp = forthDay && forthDay.main && forthDay.main.temp_max;
  forthDayMaxTemp = kelvinToCelsius(forthDayMaxTemp);
  let forthDayMinTemp = forthDay && forthDay.main && forthDay.main.temp_min;
  forthDayMinTemp = kelvinToCelsius(forthDayMinTemp);
  let forthDayDescription =
    forthDay &&
    forthDay.weather &&
    forthDay.weather[0] &&
    forthDay.weather[0].description;

  let fifthDayIcon =
    fifthDay && fifthDay.weather && fifthDay.weather[0]
      ? fifthDay.weather[0].icon
      : "01d";
  let fifthDayMaxTemp = fifthDay && fifthDay.main && fifthDay.main.temp_max;
  fifthDayMaxTemp = kelvinToCelsius(fifthDayMaxTemp);
  let fifthDayMinTemp = fifthDay && fifthDay.main && fifthDay.main.temp_min;
  fifthDayMinTemp = kelvinToCelsius(fifthDayMinTemp);
  let fifthDayDescription =
    fifthDay &&
    fifthDay.weather &&
    fifthDay.weather[0] &&
    fifthDay.weather[0].description;

  return {
    weatherIconCondition,
    fifthDayDescription,
    fifthDayIcon,
    forthDayDescription,
    forthDayIcon,
    firstDayDescription,
    thirdDayDescription,
    thirdDayIcon,
    secondDayDescription,
    secondDayIcon,
    firstDayIcon,
    nextDayOne,
    nextDayTwo,
    nextDayThree,
    nextDayFour,
    nextDayFifth,
    firstDayMaxTemp,
    firstDayMinTemp,
    secondDayMaxTemp,
    secondDayMinTemp,
    thirdDayMaxTemp,
    thirdDayMinTemp,
    forthDayMaxTemp,
    forthDayMinTemp,
    fifthDayMaxTemp,
    fifthDayMinTemp,
  };
};

export default useFiveDays;
