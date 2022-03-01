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
          <div className="bottom-Content">
            <div>
              <p>
                Weather :{" "}
                <span>{props.responseOBJ.weather[0].description}</span>
              </p>
            </div>
            <div>
              <p>
                Teperature : <span>{props.responseOBJ.main.temp}</span>
              </p>
            </div>
            <div>
              <p>
                Wind Speed : <span>{props.responseOBJ.wind.speed} Knots</span>
              </p>
            </div>
            <div>
              <p>Co-ords :</p>
              <div>
                lat : <span>{props.responseOBJ.coord.lat}</span>
              </div>
              <div>
                lon : <span>{props.responseOBJ.coord.lon}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Conditions;
