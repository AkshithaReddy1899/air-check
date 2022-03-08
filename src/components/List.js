const List = (props) => {
  const list = props;
  return (
    <li>
      <h2>{list.item.city}</h2>
      <p>
        <b>Carbon monoxide</b>
        :
        {list.item.co}
      </p>
      <p>
        <b>Ammonia</b>
        :
        {list.item.nh3}
      </p>
      <p>
        <b>Nitric oxide</b>
        :
        {list.item.no}
      </p>
      <p>
        <b>Nitrogen dioxide</b>
        :
        {list.item.no2}
      </p>
      <p>
        <b>Ozone</b>
        :
        {list.item.o3}
      </p>
      <p>
        <b>
          Fine particle
          <small>
            PM 2.5
          </small>
        </b>
        :
        {list.item.pm2_5}
      </p>
      <p>
        <b>
          Fine particle
          <small>
            PM10
          </small>
        </b>
        :
        {list.item.pm10}
      </p>
      <p>
        <b>Sulfur dioxide</b>
        :
        {list.item.so2}
      </p>
    </li>
  );
};

export default List;
