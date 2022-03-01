import React, { useState, useEffect } from "react";
import Conditions from "./Conditions";

function AppPage() {
  console.log("app page");
  const API_KEY = "51147ce8e369eb234ad7e52e15a363e4";

  const [responseOBJ, setResponseOBJ] = useState({});
  const [city, setcity] = useState("tokyo");
  let [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  function getForecast(city) {
    console.log("getting forecast");
    const data = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        if (res.cod !== 200) throw new Error();
        setResponseOBJ(res);
        setloading(false);
      })
      .catch((e) => {
        seterror(true);
        setloading(false);
        console.log(e.message);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.length === 0) return seterror(true);
    console.log(city);
    seterror(false);
    setResponseOBJ({});
    setloading(true);
    // const element =
    document.querySelector(
      `.app-container`
    ).style.backgroundImage = `url("https://source.unsplash.com/random/?${city}")`;
    getForecast(city);
  };
  return (
    <div className="app-container">
      <div>
        <form className="app-form" onSubmit={handleSubmit}>
          <div>
            <label>Enter a city name</label>
            <input
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
              type="text"
              placeholder={""}
            />
          </div>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
        {responseOBJ && (
          <div className="forcast-container">
            {responseOBJ.cod === 200 && (
              <Conditions
                responseOBJ={responseOBJ}
                error={error}
                loading={loading}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AppPage;
