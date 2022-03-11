import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountryFromApi } from '../../redux/Country';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries);
  console.log(data);

  const countriesToShow = [];

  data.map((item) => (
    item.map((obj) => (
      countriesToShow.push(obj)
    ))
  ));

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchCountryFromApi());
    }
  }, []);

  return (
    <div>
      <h1>Air check</h1>
      <small id="error">&nbsp;</small>
      <button type="button" id="back" className="back">back</button>
      <ul id="list">
        {
          countriesToShow.map((obj) => (
            <Link to={{ pathname: `/${obj.name}`, state: 'obj.name' }} key={obj.id}>
              <button type="button">details</button>
              <h4>{obj.name}</h4>
              <p>{obj.c_code}</p>
              <p>{obj.code}</p>
            </Link>
          ))
        }
      </ul>
    </div>
  );
};

export default HomePage;
