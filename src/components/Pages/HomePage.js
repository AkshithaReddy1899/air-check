import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountryFromApi } from '../../redux/Country';
import Header from './Header';
import '../../styles/main.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries);

  const [searchField, setSearchField] = useState('');
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

  const handleSearch = (e) => {
    setSearchField((e.target.value).toLowerCase());
  };

  const filteredCountries = countriesToShow.filter((country) => country.name.includes(searchField));

  return (
    <div>
      <Header />
      <div className="search">
        <input type="text" placeholder="country" onChange={handleSearch} className="input" />
      </div>
      <small id="error">&nbsp;</small>
      <button type="button" id="back" className="back">back</button>
      <ul id="list">
        {
          filteredCountries.map((obj) => (
            <Link to={{ pathname: `/${obj.name}`, state: 'obj.name' }} key={obj.id}>
              <li className={(obj.id % 2 === 0) ? 'alternate' : 'list-item'}>
                <i className="fas fa-map-marker-alt fa-4x" />
                <div className="content">
                  <i className="icon fas fa-solid fa-globe" />
                  <div>
                    <h4>{obj.name}</h4>
                    <p>{obj.c_code}</p>
                    <p>{obj.code}</p>
                  </div>
                </div>
              </li>
            </Link>
          ))
        }
      </ul>
    </div>
  );
};

export default HomePage;
