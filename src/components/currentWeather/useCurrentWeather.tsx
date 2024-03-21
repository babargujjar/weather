import {
  bgClearDay,
  bgClearNight,
  bgClooudyDay,
  bgCloudyNight,
  bgFewCloudDay,
  bgFewCloudNight,
  bgRainDay,
  bgRainNight,
  bgSnowDay,
  bgStromDay,
  bgStromNight,
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
import { CustomDateTime } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCurrentWeather } from "../../store/CurrentWeatherSlice";
import { useEffect } from "react";

const useCurrentWeather = ({ lat, lon }: any) => {
  const dispatch = useAppDispatch();
  const currentWeather = useAppSelector((state) => state.CurrentWeather.data);
  const weather = currentWeather;
  let currentTempIcon =
    weather && weather.weather && weather.weather[0]
      ? weather.weather[0].icon
      : "01d";

  function convertTimestampToCustomDateTimeObject(
    timestamp: number,
    monthNames: string[],
    dayNames: string[]
  ): CustomDateTime {
    const date = new Date(timestamp * 1000);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const monthName =
      monthNames[month] ||
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][month];
    const dayName = dayNames[date.getDay()] || "Unknown";

    return {
      day,
      dayName,
      month: monthName,
      year,
      hours,
      minutes,
      seconds,
    };
  }

  const timestamp = weather?.dt ?? 0;
  const customMonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const customDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednasday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const customDateTimeObject = convertTimestampToCustomDateTimeObject(
    timestamp,
    customMonthNames,
    customDayNames
  );

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

  const getIcon = currentTempIcon;
  const styles = {
    backgroundImage:
      getIcon === "01d"
        ? `url(${bgClearDay})`
        : getIcon === "01n"
        ? `url(${bgClearNight})`
        : getIcon === "02d"
        ? `url(${bgFewCloudDay})`
        : getIcon === "02n"
        ? `url(${bgFewCloudNight})`
        : getIcon === "03d"
        ? `url(${bgClooudyDay})`
        : getIcon === "03n"
        ? `url(${bgCloudyNight})`
        : getIcon === "04d"
        ? `url(${bgFewCloudDay})`
        : getIcon === "04n"
        ? `url(${bgFewCloudNight})`
        : getIcon === "09d"
        ? `url(${bgRainDay})`
        : getIcon === "09n"
        ? `url(${bgRainNight})`
        : getIcon === "10d"
        ? `url(${bgRainDay})`
        : getIcon === "10n"
        ? ` url(${bgRainNight})`
        : getIcon === "11d"
        ? `url(${bgStromDay})`
        : getIcon === "11n"
        ? `url(${bgStromNight})`
        : getIcon === "13d"
        ? `url(${bgSnowDay})`
        : getIcon === "13n"
        ? `url(${bgStromNight})`
        : getIcon === "50d"
        ? `url(${bgStromDay})`
        : getIcon === "50n"
        ? `url(${bgStromNight})`
        : "initial",
    height: "calc(100% - 50px)",
    backgroundSize: "cover",
  };

  const tempKtoC = (value: number, decimalPlaces: number = 0) => {
    const newValue = (value - 273).toFixed(decimalPlaces);
    return parseFloat(newValue);
  };

  useEffect(() => {
    dispatch(getCurrentWeather({ lat, lon }));
  }, [lat, lon, dispatch]);

  return {
    customDateTimeObject,
    styles,
    weatherIconCondition,
    tempKtoC,
    currentTempIcon,
    weather,
  };
};

export default useCurrentWeather;
