import { useState } from "react";
import {createTodos} from './utilities';
import TodoList from "./TodoList";
import Product from "./Product";
import './App.css'
const todos = createTodos();
function App() {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
      
      <input type="checkbox" checked={isDark} onChange={(event)=>setIsDark(event.target.checked)}/>
      <Product refferalId="refrfshfd97" productId={123} theme={isDark?'dark':'light'}/>
      <br></br>
      ==========================

      <br></br>
      <button onClick={()=>setTab('active')}>active</button>
      <button onClick={()=>setTab('completed')}>completed</button>
      <button onClick={()=>setTab('all')}>all</button>
      <input type="checkbox" checked={isDark} onChange={(event)=>setIsDark(event.target.checked)}/>
      <TodoList todos={todos} tab={tab} theme={isDark?'dark':'light'}/>

      
    </div>
  );
}

export default App;
