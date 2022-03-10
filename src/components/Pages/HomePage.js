import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchCountryFromApi } from '../../redux/Country';
import List from '../List';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries);
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
      <div className="search">
        <form>
          <input type="text" placeholder="city" />
          <button type="submit">search</button>
        </form>
      </div>
      <ul>
        {
          data.map((item) => (
            item.map((obj) => (
              <List key={uuidv4()} item={obj} />
            ))
          ))
        }
        fghjk
      </ul>
    </div>
  );
};

export default HomePage;
