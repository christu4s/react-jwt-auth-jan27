const List = ({todos})=>{
    return <ul>{todos.map((todo)=><div>{todo.id} {todo.text} {todo.completed}</div>)}</ul> 
}

export default List