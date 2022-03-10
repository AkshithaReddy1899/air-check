import { Link } from 'react-router-dom';

const List = (props) => {
  const list = props;
  return (
    <Link to="/details">
      <button type="button">details</button>
      <li>{list.item.name}</li>
    </Link>
  );
};

export default List;
