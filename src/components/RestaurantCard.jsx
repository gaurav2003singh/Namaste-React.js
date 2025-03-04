import React from "react";
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
  
      costForTwoString,
      deliveryTime,
    } = resData?.data;
  
    return (
      <div className="res-card">
        <img className="res-logo"
          src= {CDN_URL +
          cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <div className="info">
          <h4>{costForTwoString}</h4>
          <h5>{deliveryTime}minutes</h5>
         
        </div>
      </div>
    );
  };

  export default RestaurantCard;