import React from 'react';
import bgImage from '../assets/bg.jpg'; 

const Home = () => {
  return (
    <div className="card bg-dark text-white">
      <img src={bgImage} className="card-img" alt="Background" height="550px"/>
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASONAL ARRIVALS</h5>
        <p className="card-text fs-2">
          CHECK OUT ALL TRENDS
        </p>
      </div>
    </div>
  );
};

export default Home;
