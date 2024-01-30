export function createTodos() {
  const todos = [];

  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo" + i,
      completed: Math.random() > 0.5,
    });
  }

  return todos;
}

export function filterTodos(todos, tab) {
    return todos.filter(todo => {
      if (tab === 'all') {
        return true;
      } else if (tab === 'active') {
        return !todo.completed;
      } else {
        return todo.completed;
      }
      
    });
  }
