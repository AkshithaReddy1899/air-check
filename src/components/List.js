import { useNavigate } from 'react-router-dom';

const List = (props) => {
  const list = props;

  const navigate = useNavigate();

  const routeChange = () => {
    const path = '/details';
    navigate(path, { state: list });
  };

  return (
    <li>
      <div>
        <button type="button" onClick={routeChange}>details</button>
      </div>
      <h2>{list.item.city}</h2>
      <h3>
        AQI:&nbsp;
        {list.item.aqi}
      </h3>
    </li>
  );
};

export default List;
