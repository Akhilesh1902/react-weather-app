import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div>
        <div>
          <h1>Welcome to the Weather App</h1>
          <p>This is a demo project made using the open-weather api</p>
        </div>
        <Link className="btn" to="/app">
          View App
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
