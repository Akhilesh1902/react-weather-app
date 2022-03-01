import React from "react";

function Conditions(props) {
  return (
    <div>
      {props.error && <small>please enter a valid city</small>}
      {props.loading && <p>loading...</p>}
      {props.responseOBJ.cod === 200 ? (
        <div className="forecast-content">
          <div className="top-content">
            <p>
              <strong>{props.responseOBJ.name}</strong>
            </p>
            <p>
              It is currently {Math.round(props.responseOBJ.main.temp - 273.15)}{" "}
              degrees out with {props.responseOBJ.weather[0].description}.
            </p>
          </div>
          <div className="bottom-Content"></div>
        </div>
      ) : null}
    </div>
  );
}

export default Conditions;
