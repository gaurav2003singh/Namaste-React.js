import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local state Variable - Super powerful variable.
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //normal js variable.
  let listOfRestaurantsjs = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "121603",
        name: "Kannur Food Point",
        uuid: "51983905-e698-4e31-b0d7-e376eca56320",
        city: "1",
        area: "Tavarekere",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 3,
        avgRating: "3.9",
      },
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "121602",
        name: "bhatt bhojnalay",
        uuid: "51983905-e698-4e31-b0d7-e376eca56320",
        city: "1",
        area: "Tavarekere",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 3,
        avgRating: "4.5",
      },
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "121608",
        name: "bhatt bhojnalay",
        uuid: "51983905-e698-4e31-b0d7-e376eca56320",
        city: "1",
        area: "Tavarekere",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 3,
        avgRating: "4.1",
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
