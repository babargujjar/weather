import loader from "./../../assets/icons/Type7.png";
import useSearch from "./useSearch";


const Search = () => {
   
  const {cityName,search,isLoading,relatedData,handler,data} = useSearch()

  return (
    <>
      <div className="lg:mt-[56px] mt-[32px]  ">
        <div className="relative w-[311px] md:w-[504px] h-[56px] mx-auto">
          <input
            className=" rounded-lg w-[311px] lg:h-[56px] lg:w-[504px] py-[17px] mx-auto  px-5 bg-[#1E1E29]"
            name="search"
            value={search}
            onChange={(e) => {
              e.preventDefault();
              handler(e.target.value);
            }}
            type="text"
            placeholder="Search Location"
            autoComplete="off"
          />
          {isLoading && (
            <div className="absolute  cursor-pointer top-4 right-2 h-[32px] w-[32px]">
              <img
                src={loader}
                alt="Loader Image"
                className="animate-spin w-[26px] h-[26px]  text-red-400"
              />
            </div>
          )}
        </div>
      </div>
      {data?.length > 0 && (
        <div className=" bg-gray-500 lg:max-w-[504px] rounded-lg mt-2 mx-auto object-cover overflow-hidden">
          <ul>
            {data?.map((item, i) => (
              <li>
                <button
                  className="cursor-pointer  flex items-center w-[311px] lg:h-[56px] lg:w-[504px] py-[17px]  px-5"
                  key={i}
                  onClick={() => cityName(item)}
                >
                  {item.name ? item.name : "No City Found"}
                </button>
                <hr className="border-black" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Search;
