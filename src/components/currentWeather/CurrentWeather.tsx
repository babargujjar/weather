import { useEffect } from "react";
import Logos from "./../../assets/Logos.svg";
import cloudy from "./../../assets/icons/cloudyDay.png";
import clearDaySun from "./../../assets/icons/clearDaySun.png";
import clearNightMoon from "./../../assets/icons/clearNight.png";
import fewCloudyDay from "./../../assets/icons/fewCloudsDay.png";
import fewCloudyNight from "./../../assets/icons/fewCloudsNight.png";
import cloudyDay from "./../../assets/icons/cloudyDay.png";
import cloudyNight from "./../../assets/icons/cloudyNight.png";
import rainDay from "./../../assets/icons/rainDay.png";
import rainNight from "./../../assets/icons/rainNight.png";
import snowNight from "./../../assets/icons/snowNight.png";
import snowDay from "./../../assets/icons/stormDay.png";
import stormDay from "./../../assets/icons/stormDay.png";
import stormNight from "./../../assets/icons/snowNight.png";
import mistDay from "./../../assets/icons/fogSun.png";
import mistNight from "./../../assets/icons/foggyMoon.png";

import bgClearDay from "../../assets/images/bgClearDay.svg";
import bgClearNight from "../../assets/images/bgClearNight.svg";
import bgClooudyDay from "../../assets/images/bgCloudyDay.svg";
import bgCloudyNight from "../../assets/images/bgCloudyNight.svg";
import bgFewCloudDay from "../../assets/images/bgFewCloudDay.svg";
import bgFewCloudNight from "../../assets/images/bgFewCloudNight.svg";
import bgRainDay from "../../assets/images/bgRainDay.svg";
import bgRainNight from "../../assets/images/bgRainNight.svg";
import bgSnowDay from "../../assets/images/bgSnowDay.svg";
import bgStromDay from "../../assets/images/bgStormDay.svg";
import bgStromNight from "../../assets/images/bgStormNight.svg";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCurrentWeather } from "../../store/CurrentWeatherSlice";
import { CustomDateTime, CurrentWeatherProps } from "../../types/types";

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ lat, lon }) => {
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
  //   switch (dayImg) {
  //     case "01d":
  //       return bgClearDay;
  //     case "01n":
  //       return bgClearNight;
  //     case "02d":
  //       return bgFewCloudDay;
  //     case "02n":
  //       return bgFewCloudNight;
  //     case "03d":
  //       return bgClooudyDay;
  //     case "03n":
  //       return bgCloudyNight;
  //     case "04d":
  //       return bgFewCloudDay;
  //     case "04n":
  //       return bgFewCloudNight;
  //     case "09d":
  //       return bgRainDay;
  //     case "09n":
  //       return bgRainNight;
  //     case "10d":
  //       return bgRainDay;
  //     case "10n":
  //       return bgRainNight;
  //     case "11d":
  //       return bgStromDay;
  //     case "11n":
  //       return bgStromNight;
  //     case "13d":
  //       return bgSnowDay;
  //     case "13n":
  //       return bgStromNight;
  //     case "50d":
  //       return bgStromDay;
  //     case "50n":
  //       return bgStromNight;
  //     default:
  //       return bgClearDay;
  //   }
  // };

  const getIcon = currentTempIcon;
  console.log(getIcon);
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

  return (
    <>
      <div className="flex lg:gap-3 max-w-[335px] md:max-w-[664px] w-full  gap-2 h-14 mb-4 ">
        <div className="h-full p-2 [background-color:#1C1C27] rounded-lg">
          <img className="h-10 w-10" src={Logos} alt="" />
        </div>
        <input
          className="w-full h-full rounded-lg px-5 [background-color:#1C1C27] "
          type="search"
          placeholder="Buscar Local"
        />
      </div>
      <div
        style={styles}
        className="bg-cover flex flex-col justify-between object-cover cardbg overflow-hidden relative px-5 lg:px-7 py-5 lg:py-7  text-white text-xl"
      >
        <div className="flex justify-between ">
          <div>
            <h1 className="text-[17px] sm:text-2xl">{weather?.name}</h1>
            <h2 className="text-[15px] sm:text-2xl">
              {customDateTimeObject.dayName},{customDateTimeObject.month}
              {customDateTimeObject.day},{customDateTimeObject.year}
            </h2>
          </div>
          <div>
            <h2 className="text-[15px] sm:text-2xl">
              {customDateTimeObject.hours}:{customDateTimeObject.minutes}
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-between  ">
          <div>
            <h2 className="sm:text-7xl md:text-8xl text-4xl font-bold">
              {weather?.main ? tempKtoC(weather.main.temp, 0) : "Loading..."}ºC
            </h2>
            <br />
            <div className="flex-col md:flex">
              <h3 className="text-lg sm:text-3xl font-semibold">
                {weather?.main
                  ? tempKtoC(weather.main.temp_max, 0)
                  : "Loading..."}
                ºC /{" "}
                {weather?.main
                  ? tempKtoC(weather.main.temp_min, 0)
                  : "Loading..."}
                ºC
              </h3>
              <div className="h-[20px]">
                <p className=" sm:text-3xl h-full text-[14px]">
                  {weather?.weather[0].description}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="absolute w-full max-w-[50%] max-h-[50%] h-full lg:max-w-[40%] lg:max-h-[40%] right-0 bottom-0"
              src={weatherIconCondition(currentTempIcon)}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
