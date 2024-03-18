import logo from "./../../assets/Logo.svg";
import Search from "../../components/searchInput/Search";

const Home = () => {
  return (
    <div className="h-[100vh] w-full">

      <div className="max-w-[186px] h-[32px] opacity-[80%] lg:mb-[80px] mx-auto flex justify-center items-center pt-12">
        <img className="w-[178px] h-[30px]" src={logo} alt="logo" />
      </div>

      <div className=" text-white w-[311px] md:w-[504px] mx-auto flex flex-col mt-[192px] justify-center items-center">
        <h1 className="text-white font-[700] lg:text-[32px] leading-[28px] text-[20px]">
          Welcome to <span className="text-blue-300">Weather App</span>
        </h1>
        <h3 className="text-gray-400 mt-2  text-[15px] sm:text-[20px] ">
          Choose location to see weather forcast
        </h3>
        <Search />
      </div>
      
    </div>
  );
};

export default Home;
