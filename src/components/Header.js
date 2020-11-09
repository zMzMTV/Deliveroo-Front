import React from "react";
import Logo from "../img/Deliveroo_logo.svg.png";

const Header = ({ data, isLoading }) => {
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      <header className="Header">
        <div className="bar">
          <div className="bar-center">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="restaurantInfos">
          <div className="restaurantInfosCenter">
            <div className="restaurantInfosText">
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>
            <img
              className="restaurantInfosCover"
              src={data.restaurant.picture}
              alt="Brunch"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
