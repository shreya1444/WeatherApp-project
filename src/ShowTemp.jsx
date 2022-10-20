import React from "react";

function ShowTemp({ text }) {
  return (
    <div class="container my-5">
      <div class="row mb-2">
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Date</h5>
              <p class="card-text">{text.Date}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Time</h5>
              <p class="card-text">{text.Time}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Temp</h5>
              <p class="card-text">{text.Temp}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">wind Direction</h5>
              <p class="card-text">{text.WindDirection}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Wind Speed</h5>
              <p class="card-text">{text.WindSpeed}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Weather Description</h5>
              <p class="card-text">{text.WeatherDescription}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Humidity</h5>
              <p class="card-text">{text.Humidity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowTemp;
