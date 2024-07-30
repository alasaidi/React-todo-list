import "../App.css";

// eslint-disable-next-line react/prop-types
const Items = ({ itemValue = "item", keyValue = "", checkedValue = false }) => {
  return (
    <li key={keyValue}>
      <label>
        <input type="checkbox" checked={checkedValue} />
        <span>{itemValue}</span>
      </label>
      <button className="btn btn-danger"> Delete</button>
    </li>
  );
};

export default Items;
