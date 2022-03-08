import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  return (
    <div>
      <h2>{location.state.item.city}</h2>
      <p>
        AQI:&nbsp;
        {location.state.item.aqi}
      </p>
      <p>
        <b>Carbon monoxide</b>
        :
        {location.state.item.co}
      </p>
      <p>
        <b>Ammonia</b>
        :
        {location.state.item.nh3}
      </p>
      <p>
        <b>Nitric oxide</b>
        :
        {location.state.item.no}
      </p>
      <p>
        <b>Nitrogen dioxide</b>
        :
        {location.state.item.no2}
      </p>
      <p>
        <b>Ozone</b>
        :
        {location.state.item.o3}
      </p>
      <p>
        <b>
          Fine particle
          <small>
            PM 2.5
          </small>
        </b>
        :
        {location.state.item.pm2_5}
      </p>
      <p>
        <b>
          Fine particle
          <small>
            PM10
          </small>
        </b>
        :
        {location.state.item.pm10}
      </p>
      <p>
        <b>Sulfur dioxide</b>
        :
        {location.state.item.so2}
      </p>
    </div>
  );
};

export default DetailsPage;
