import { useState } from "react";
import {Item}  from "./components/Item";

function App() {

  const [items, setItems] = useState<string[]>([])


  function addItemToList(): void {
    setItems([...items, `Item ${items.length}`])
  }

  return (
    <>
    <div >
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => {
          return <Item  key={item} title={item}/>
        })}
      </ul>
    </div>
    {console.log(items)}
    </>
  );
}

export default App;
