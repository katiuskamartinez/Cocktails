import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import DrinkDetails from "./DrinkDetails";
import Formulario from "./Formulario";
import Loader from "./Loader";

const DrinkSearch = () => {
  const [search, setSearch] = useState(null);
  const [drinkData, setDrinkData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;
    const fetchData = () => {
      const { drink } = search;
      let drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

      setLoading(true);
      helpHttp()
        .get(drinkUrl)
        .then((res) => {
          //console.log(res);
          setDrinkData(res);
        });
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };
  return (
    <>
      <Formulario handleSearch={handleSearch} />
      {loading && <Loader />}
      {loading === false ? (
        <DrinkDetails search={search} drinkData={drinkData} />
      ) : null}
    </>
  );
};

export default DrinkSearch;
