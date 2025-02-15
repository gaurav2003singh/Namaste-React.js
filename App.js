import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ==> Object => HTMLelement(render)

//React element

const Title =  (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

//React functional Components

const HeadingComponent = () => (
  <div id="container">
    {Title }
    <h1 className="heading">Namaste React functional components</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
