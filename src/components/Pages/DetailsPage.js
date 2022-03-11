import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailsFromAPI } from '../../redux/details';

const DetailsPage = () => {
  const { state } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.details);
  console.log(data);
  useEffect(() => {
    if (!data.length) {
      dispatch(getDetailsFromAPI(state));
    }
  }, []);

  return (
    <>
      <ul>
        {
          data.map((obj) => console.log(obj))
        }
        {
          data.map((obj) => (
            <li key={obj.id}>
              <h3>{(obj.name) ? obj.name : 'Not available'}</h3>
              <img src={obj.flag} alt="flag" />
              <p>
                <b>Official name</b>
                :&nbsp;
                {
                  (obj.official) ? obj.official : 'Not available'
                }
              </p>
              <p>
                <b>continent</b>
                :&nbsp;
                {
                  (obj.continent) ? obj.continent : 'Not available'
                }
              </p>
              <p>
                <b>Capital</b>
                :&nbsp;
                {
                  (obj.cap) ? obj.cap : 'Not available'
                }
              </p>
              <p>
                <b>Region</b>
                :&nbsp;
                {
                  (obj.region) ? obj.region : 'Not available'
                }
              </p>
              <p>
                <b>Sub Region</b>
                :&nbsp;
                {
                  (obj.subregion) ? obj.subregion : 'Not available'
                }
              </p>
              <p>
                <b>Population</b>
                :&nbsp;
                {
                  (obj.pop) ? obj.pop : 'Not available'
                }
              </p>
              <p>
                <b>Area</b>
                :&nbsp;
                {
                  (obj.area) ? obj.area : 'Not available'
                }
                Km
                <sup>2</sup>
              </p>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default DetailsPage;
