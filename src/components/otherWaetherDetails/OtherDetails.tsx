import thermometer from "./../../assets/icons/thermometer-simple-light.png";
import cloudrain from "./../../assets/icons/cloud-rain-light.png";
import droplight from "./../../assets/icons/drop-light.png";
import sundim from "./../../assets/icons/sun-dim-light.png";
import windlight from "./../../assets/icons/wind-light.png";
import { useAppSelector } from "../../hooks";

const OtherDetails = () => {

  const weather = useAppSelector((state) => state.CurrentWeather.data);


  const tempKtoC = (value: number, decimalPlaces: number = 0) => {
    const newValue = (value - 273).toFixed(decimalPlaces);
    return parseFloat(newValue);
  };

  return (
    <>
      <div className="text-white max-w-[359px] max-h-[292px] lg:max-w-[630px] lg:max-h-[398px] rounded-lg h-full  [background-color:#16161F] px-[16px] py-[4px] lg:px-7 sm:pt-7">
        <h2 className="text-[#535364] hidden sm:block mb-6 text-lg">
          More Weather Details
        </h2>
        <div>
          <div className="flex lg:max-w-[582px] lg:h-[64px] items-center border-b border-[#282831] py-3 justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-[30px] [color:#535364]"
                src={thermometer}
                alt=""
              />{" "}
              <h3 className="text-md text-[#a1a1b3]">Feels Like</h3>
            </div>
            <h2 className="text-xl">
              {weather?.main
                ? tempKtoC(weather.main.feels_like, 0)
                : "Loading..."}
              º C
            </h2>
          </div>
          <div className="flex lg:max-w-[582px] lg:h-[64px] items-center border-b border-[#282831] py-3 justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-[30px] [color:#535364]"
                src={cloudrain}
                alt=""
              />{" "}
              <h3 className="text-md text-[#a1a1b3]">Probability of Rain</h3>
            </div>
            <h2 className="text-xl">0%</h2>
          </div>
          <div className="flex lg:max-w-[582px] lg:h-[64px] items-center border-b border-[#282831] py-3 justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-[30px] [color:#535364]"
                src={windlight}
                alt=""
              />{" "}
              <h3 className="text-md text-[#a1a1b3]">Wind Speed</h3>
            </div>
            <h2 className="text-xl">{weather?.wind.speed} km/h</h2>
          </div>
          <div className="flex lg:max-w-[582px] lg:h-[64px] items-center border-b border-[#282831] py-3 justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-[30px] [color:#535364]"
                src={droplight}
                alt=""
              />{" "}
              <h3 className="text-md text-[#a1a1b3]">Air Humidity</h3>
            </div>
            <h2 className="text-xl">{weather?.main.humidity}%</h2>
          </div>
          <div className="flex lg:max-w-[582px] lg:h-[64px] items-center py-3 justify-between">
            <div className="flex items-center gap-2">
              <img className="w-[30px] [color:#535364]" src={sundim} alt="" />{" "}
              <h3 className="text-md text-[#a1a1b3]">UV Index</h3>
            </div>
            <h2 className="text-xl">5</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherDetails;
