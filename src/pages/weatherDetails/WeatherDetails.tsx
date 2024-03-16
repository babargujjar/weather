import { useLocation } from 'react-router-dom'
import CurrentWeather from '../../components/currentWeather/CurrentWeather'
import OtherDetails from '../../components/otherWaetherDetails/OtherDetails'
import FiveDays from '../../components/weatherForcast/FiveDays'

const WeatherDetails = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    var lon = queryParams.get("lon")
    var lat = queryParams.get("lat")

    return (
      <div className="w-full h-[812px] lg:h-[768px] lg:py-[24px] bg-[#13131A] ">
        <div className="flex flex-col lg:flex-row w-full h-full lg:max-w-[1318px] m-auto lg:max-h-[720px] gap-[8px] lg:gap-[23px]">
            
          <div className="p-[12px] lg:p-4 max-w-[359px] w-full h-full max-h-[398px] lg:max-w-[664px] lg:max-h-[720px] col-span-2 lg:col-span-1 bg-[#16161F] rounded-lg">
            <CurrentWeather lat={Number(lat) || 0} lon={Number(lon) || 0} />
          </div>

          <div className="lg:max-w-[630px] max-h-[720px] h-full w-full">
            <div className="  col-span-2 lg:col-span-1 h-full flex flex-col gap-2 md:gap-3 grid-cols-5">
              <OtherDetails />
              <FiveDays lat={Number(lat) || 0} lon={Number(lon) || 0} />
            </div>
          </div>

        </div>
      </div>
    );
}

export default WeatherDetails