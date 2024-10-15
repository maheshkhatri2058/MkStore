import React from "react";
import Bro from "../img/banner.png";

const Banner = () => {
  return (
    <>
      <div className="d-flex flex-wrap mt-5" id="container ">
        <div className="left p-3">
          <h3>
            Hello, welcome here to learn something{" "}
            <span className="text-warning">New Everyday</span>
          </h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          mollitia eveniet maxime natus asperiores minima recusandae unde
          dignissimos adipisci dolor!
          <div>
            <input type="email" placeholder="Enter your email to login"></input>
            <button className="btn btn-warning">Login</button>
          </div>
        </div>
        <div className="right p-3">
          <img src={Bro}></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
