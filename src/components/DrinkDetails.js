import React from "react";
import Message from "./Message";
import InfoDrink from "./InfoDrink";

const DrinkDetails = ({ search, drinkData }) => {
  if (!drinkData) return null;
  return (
    <>
      {!drinkData.drinks ? (
        <Message msg={`Error:No se encontró ${search.drink}`} />
      ) : (
        <InfoDrink drinkData={drinkData.drinks} />
      )}
    </>
  );
};

export default DrinkDetails;
