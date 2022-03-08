import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi, searchDataFromApi } from '../redux/air';
import List from './List';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.air);
  useEffect(() => {
    if (!data.length) {
      dispatch(fetchDataFromApi());
    }
  }, []);

  const textInput = React.createRef();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchDataFromApi(textInput.current.value));
    textInput.current.value = '';
  };

  return (
    <div>
      <h1>Air checks</h1>
      <div className="search">
        <form>
          <input ref={textInput} type="text" placeholder="city" />
          <button type="submit" onClick={handleSearch}>search</button>
        </form>
      </div>
      <ul>
        {
          (data.length === 1)
            ? data.map((item) => (
              item.map((obj) => <List key={obj.id} item={obj} />)))
            : <List key={data.id} item={data} />
        }
      </ul>
    </div>
  );
};

export default HomePage;
