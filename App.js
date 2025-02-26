import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="C:\Users\ajayc\OneDrive\Desktop\bird-colorful-logo-gradient-vector_343694-1365.avif"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RastaurantCard = (props) => {
  const {resName,cuisine} = props; 
  return (
    <div className="res-card">
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.dAwpD5xrPNSDV10bs8ulqQHaEK&pid=Api&P=0&h=220"
        alt=""
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <div className="info">
        <h4>4.4</h4>
        <h4>38 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search here" />
      </div>
      <div className="res-container">
        <RastaurantCard
          resName="Meghana foods"
          cuisine="Biryani,North Indian,Asian"
        />
        <RastaurantCard resName="KFC" cuisine="Burger,Fast Food" />
        <RastaurantCard
          resName="Meghana foods"
          cuisine="Biryani,North Indian,Asian"
        />
        <RastaurantCard
          resName="Meghana foods"
          cuisine="Biryani,North Indian,Asian"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
