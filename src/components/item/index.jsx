import { BsCheck2, BsFillTrashFill } from "react-icons/bs";
import { IconContext } from "react-icons";

import "../../App.css";

const Item = ({ id, name, done, setDone, removeItem }) => {
  return (
    <div className="item">
      <div className="item-name-and-checkbox-wrapper">
        <button
          className={`item-checkbox ${
            done ? "item-checkbox-inactive" : "item-checkbox-active"
          }`}
          onClick={() => setDone(id, !done)}
        >
          <IconContext.Provider value={{ className: "check-mark" }}>
            <BsCheck2 />
          </IconContext.Provider>
        </button>
        <span className={done ? "inactive-item-name" : ""}>{name}</span>
      </div>
      <button className="delete-btn" onClick={() => removeItem(id)}>
        <IconContext.Provider value={{ className: "trash-icon" }}>
          <BsFillTrashFill />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Item;
