import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchDataFromApi } from '../redux/air';

const HomeSearch = () => {
  const textInput = React.createRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchDataFromApi(textInput.current.value));
    textInput.current.value = '';
  };

  return (
    <form>
      <input ref={textInput} type="text" placeholder="city" />
      <button type="submit" onClick={handleSearch}>search</button>
    </form>
  );
};

export default HomeSearch;
