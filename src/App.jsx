import { useState } from "react";
import Item from "./components/item";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [uid, setUid] = useState(1);
  const [items, setItems] = useState([
    {
      name: "item 1",
      id: 0,
      done: false
    }
  ]);

  const setDone = (id, newState) => {
    const newItems = [...items];
    for (const item of newItems) {
      if (item.id === id) {
        item.done = newState;
      }
    }
    setItems(newItems);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addItem = () => {
    const newItem = {
      name: value,
      id: uid,
      done: false
    };

    setValue("");
    setUid((id) => ++id);

    const newItems = [newItem, ...items];

    setItems(newItems);
  };

  const removeItem = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-box">
          <div className="input-wrapper">
            <input type="text" value={value} onChange={handleChange} />
          </div>
          <button onClick={addItem}>Add</button>
        </div>
      </form>

      <div className="items-box undone-items">
        <h2>To Do</h2>
        {items
          .filter((item) => !item.done)
          .map(({ name, id, done }) => {
            return (
              <Item
                key={id}
                id={id}
                name={name}
                done={done}
                setDone={setDone}
                removeItem={removeItem}
              />
            );
          })}
      </div>
      <hr className="divider" />
      <div className="items-box done-items">
        <h2>Done</h2>
        {items
          .filter((item) => item.done)
          .map(({ name, id, done }) => {
            return (
              <Item
                key={id}
                id={id}
                name={name}
                done={done}
                setDone={setDone}
                removeItem={removeItem}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
