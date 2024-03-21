import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getOptions } from "../../store/OptionSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocationItem } from "../../types/types";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [relatedData, setRelatedData] = useState<any>([]);

  const handler = (value: string) => {
    setSearch(value);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const relatedCityName = useAppSelector((state) => state.options);

  const data: LocationItem[] = relatedData.data;

  useEffect(() => {
    if (relatedCityName?.data) {
      setRelatedData(relatedCityName.data);
    } else {
      setRelatedData([]);
    }
  }, [relatedCityName]);

  const handleNavigate = (item: LocationItem) => {
    let lon = item.lon;
    let lat = item.lat;

    setTimeout(() => {
      navigate(`/weather?lon=${lon}&lat=${lat}`);
    }, 2000);
  };

  const cityName = (item: LocationItem) => {
    setSearch(item.name);
    setIsLoading(true);
    handleNavigate(item);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOptions(search ? search : ""));
    }, 1000);
  }, [search]);
  return {
    cityName,
    search,
    isLoading,
    relatedData,
    handler,
    data
  };
};

export default useSearch;
