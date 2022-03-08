import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from '../redux/air';
import List from './List';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.air);
  console.log(data);

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchDataFromApi());
    }
  }, []);

  return (
    <div>
      <h1>Air checks</h1>
      <ul>
        {
          data.map((item) => (
            item.map((obj) => <List key={obj.id} item={obj} />)))
        }
      </ul>
    </div>
  );
};

export default HomePage;
