import { useState } from "react";

function App() {

  const [items, setItems] = useState<string[]>([])


  function addItemToList(): void {
    setItems([...items, `Item ${items.length}`])
  }

  return (
    <div >
      hello world
    </div>
  );
}

export default App;
