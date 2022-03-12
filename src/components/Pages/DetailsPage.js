import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailsFromAPI } from '../../redux/details';
import '../../styles/details.css';

const DetailsPage = () => {
  const { state } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.details);
  const item = data.slice(-1);
  useEffect(() => {
    dispatch(getDetailsFromAPI(state));
  }, []);

  return (
    <>
      <div className="details">
        {
          item.map((obj) => (
            <li key={obj.id}>
              <div className="details-main">
                <h3>{(obj.name) ? obj.name : 'Not available'}</h3>
                <img src={obj.flag} alt="flag" className="flag" />
              </div>
              <small className="details-div">Country details</small>
              <p className="detail">
                <b>Official name</b>
                {
                  (obj.official) ? obj.official : 'Not available'
                }
              </p>
              <p className="detail odd">
                <b>continent</b>
                {
                  (obj.continent) ? obj.continent : 'Not available'
                }
              </p>
              <p className="detail">
                <b>Capital</b>
                {
                  (obj.cap) ? obj.cap : 'Not available'
                }
              </p>
              <p className="detail odd">
                <b>Region</b>
                {
                  (obj.region) ? obj.region : 'Not available'
                }
              </p>
              <p className="detail">
                <b>Sub Region</b>
                {
                  (obj.subregion) ? obj.subregion : 'Not available'
                }
              </p>
              <p className="detail odd">
                <b>Population</b>
                {
                  (obj.pop) ? obj.pop : 'Not available'
                }
              </p>
              <p className="detail">
                <b>Area</b>
                <span>
                  {
                    (obj.area) ? obj.area : 'Not available'
                  }
                  Km
                  <sup>2</sup>
                </span>
              </p>
            </li>
          ))
        }
      </div>
    </>
  );
};

export default DetailsPage;
