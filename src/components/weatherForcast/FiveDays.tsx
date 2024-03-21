import { cloudy } from "../../assets/constants/constants";
import { CurrentWeatherProps } from "../../types/types";
import useFiveDays from "./useFiveDays";


const FiveDays: React.FC<CurrentWeatherProps> = ({ lat, lon }) => {

  const {
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
  } = useFiveDays({ lat, lon });
  

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
              className="lg:w-[67px]  cursor-pointer lg:h-[67px]"
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
              className="lg:w-[67px]  cursor-pointer lg:h-[67px]"
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
              className="lg:w-[67px]  cursor-pointer lg:h-[67px]"
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
              className="lg:w-[67px]  cursor-pointer lg:h-[67px]"
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
