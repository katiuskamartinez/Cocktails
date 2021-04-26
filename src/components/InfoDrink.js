import React from "react";
import "./InfoDrink.css";

const InfoDrink = ({ drinkData }) => {
  return (
    <>
      <div className="container">
        <div className="cars">
          {drinkData.map((el, index) => (
            <div key={index} className="car">
              <div className="name">
                <h2>{el.strDrink}</h2>
              </div>
              {<img src={el.strDrinkThumb} alt={el.strDrinkThumb} />}
              {el.strCategory}
              <h3>Ingredients:</h3>
              <ul>
                <li>{el.strIngredient1}</li>
                <li>{el.strIngredient2}</li>
                <li>{el.strIngredient3}</li>
                <li>{el.strIngredient4}</li>
                <li>{el.strIngredient5}</li>
              </ul>
              <h3>Instructions:</h3>
              <p>{el.strInstructions}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default InfoDrink;
