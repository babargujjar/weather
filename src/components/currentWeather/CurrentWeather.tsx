import Logos from "./../../assets/Logos.svg";
import {  CurrentWeatherProps } from "../../types/types";
import useCurrentWeather from "./useCurrentWeather";


const CurrentWeather: React.FC<CurrentWeatherProps> = ({ lat, lon }) => {

  const {
    customDateTimeObject,
    styles,
    weatherIconCondition,
    tempKtoC,
    currentTempIcon,
    weather,
  } = useCurrentWeather({ lat, lon });

  return (
    <>
      <div className="flex lg:gap-3 max-w-[335px] md:max-w-[664px] w-full  gap-2 h-14 mb-4 ">
        <div className="h-full p-2 [background-color:#1C1C27] rounded-lg">
          <img className="h-10 w-10 cursor-pointer" src={Logos} alt="" />
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
              className="absolute w-full cursor-pointer max-w-[50%] max-h-[50%] h-full lg:max-w-[40%] lg:max-h-[40%] right-0 bottom-0"
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
