import {useMemo} from 'react'
import List from "./Lists";
import { filterTodos } from "./utilities";

const TodoList =({todos, tab, theme}) =>{
    const visibleTodos = useMemo(()=>filterTodos(todos, tab),[todos, tab]);
return ( <div className={theme}>
 <List todos={visibleTodos} />
</div>)
}

export default TodoList;