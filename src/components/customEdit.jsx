import { Link } from "react-router-dom";

const CustomEdit = () => {
  return (
    <div>
      height
      <input type="color" />
      tabs
      <input type="color" />
      <Link to={"/start3"}>
        <button>ready to start</button>
      </Link>
    </div>
  );
};

export default CustomEdit;
