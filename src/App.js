import './App.css';
import {useState} from "react";

function App() {
  let [itemForAdd, setItemForAdd] = useState('');  
  let [items, setItems] = useState([]);
  
  let add = ()=>{
      if(itemForAdd === '')
          return;
      setItems(items=> {
          items.push(itemForAdd);
          return items;
      });
      setItemForAdd('');
  };
  return (
    <div className="App">
      <header className="App-header">
        Todo list
      </header>
      <div>
          <input value={itemForAdd} onChange={e=>{setItemForAdd(e.target.value)}} /> 
          <button onClick={add}>Add</button>
      </div>  
      <ul>
          {items.map((item, index) => <li>{item} <button onClick={e=>{
              setItems(items=> {
                  return items.filter((item, filterIndex) => index !== filterIndex);
              });
              return false;
          }}>Done</button></li>)}
      </ul>
    </div>
  );
}

export default App;
