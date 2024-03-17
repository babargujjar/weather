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
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getWeatherForecast } from "../../store/WeatherForecastSlice";
import { useEffect } from "react";
import { CurrentWeatherProps, WeatherDatas } from "../../types/types";


const FiveDays: React.FC<CurrentWeatherProps> = ({ lat, lon }) => {

  const dispatch = useAppDispatch();
  const weatherForecast: any = useAppSelector(
    (state) => state.WeatherForecast.data);

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

  // first Day start
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
  // first Day end
  // Second Day Start
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
  // Second Day end
  // third day start
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
  // third day end
  // forth Day start
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
  // forth Day end
  // fifth Day Start
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
  // fifth Day end

  return (
    <>
      <div className="col-span-2 max-w-[359px] max-h-[176px] lg:max-w-[630px] p-4 lg:max-h-[306px] w-full h-full overflow-hidden rounded-lg [background-color:#16161F]">
        <h2 className="text-[#535364] lg:pl-[24px] lg:mt-[28px] text-lg hidden sm:block">
          Previsão para 5 dias
        </h2>
        <div className="flex text-white lg:m-[18px] items-center">
          <div className="flex w-full max-h-[212px] max-w-[116px] lg:py-[28px] lg:px-[9px] md:px-[3px] items-center justify-center flex-col">
            <h6 className="text-[#a1a1b3] text-[13px]">{nextDayOne}</h6>
            <img
              className="lg:w-[67px] lg:h-[67px]"
              src={weatherIconCondition(firstDayIcon ?? cloudy)}
              alt=""
            />
            <h6 className=" text-[#a1a1b3] text-[11px] hidden sm:block">
              {firstDayDescription}
            </h6>
            <h3>
              {firstDayMaxTemp}ºc{" "}
              <span className="text-[#7F7F98] block sm:inline-block">
                {firstDayMinTemp}ºc
              </span>
            </h3>
          </div>
          <div className="flex w-full lg:py-[28px] lg:px-[9px] md:px-[3px] justify-center items-center flex-col">
            <h6 className="text-[#a1a1b3] text-[13px]">{nextDayTwo}</h6>
            <img
              className="lg:w-[67px] lg:h-[67px]"
              src={weatherIconCondition(secondDayIcon ?? cloudy)}
              alt=""
            />
            <h4 className="text-[#a1a1b3] text-[11px] hidden sm:block">
              {secondDayDescription}
            </h4>
            <h3>
              {secondDayMaxTemp}ºc{" "}
              <span className="text-[#535364] block sm:inline-block">
                {secondDayMinTemp}ºc
              </span>
            </h3>
          </div>
          <div className="flex lg:py-[28px] w-full lg:px-[9px] md:px-[3px] justify-center items-center flex-col">
            <h6 className="text-[#a1a1b3] text-[13px]">{nextDayThree}</h6>
            <img
              className="lg:w-[67px] lg:h-[67px]"
              src={weatherIconCondition(thirdDayIcon ?? cloudy)}
              alt=""
            />
            <h4 className="text-[#a1a1b3] text-[11px] hidden sm:block">
              {thirdDayDescription}
            </h4>
            <h3>
              {thirdDayMaxTemp}ºc{" "}
              <span className="text-[#535364] block sm:inline-block">
                {thirdDayMinTemp}ºc
              </span>
            </h3>
          </div>
          <div className="flex w-full lg:py-[28px] lg:px-[9px] md:px-[3px] justify-center items-center flex-col">
            <h6 className="text-[#a1a1b3] text-[13px]">{nextDayFour}</h6>
            <img
              className="lg:w-[67px] lg:h-[67px]"
              src={weatherIconCondition(forthDayIcon ?? cloudy)}
              alt=""
            />
            <h4 className="text-[#a1a1b3] text-[11px] hidden sm:block">
              {forthDayDescription}
            </h4>
            <h3>
              {forthDayMaxTemp}ºc{" "}
              <span className="text-[#535364] block sm:inline-block">
                {forthDayMinTemp}ºc
              </span>
            </h3>
          </div>
          <div className="flex w-full lg:py-[28px] lg:px-[9px] md:px-[3px] justify-center items-center flex-col">
            <h6 className="text-[#a1a1b3] text-[13px]">{nextDayFifth}</h6>
            <img
              className="lg:w-[67px] lg:h-[67px]"
              src={weatherIconCondition(fifthDayIcon ?? cloudy)}
              alt=""
            />
            <h4 className="text-[#a1a1b3] text-[11px] hidden sm:block">
              {fifthDayDescription}
            </h4>
            <h3>
              {fifthDayMaxTemp}ºc{" "}
              <span className="text-[#535364] block sm:inline-block">
                {fifthDayMinTemp}ºc
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveDays;
