import React from 'react'

const TodoList = (props) => {
    // 2
    let filteredTodos = props.todos;

    // 1
    let todoList = <li>No Item</li>
    
    // 3
    if(props.todos && props.todos.length > 0) {
        if(props.keyword) {
            filteredTodos = props.todos.filter(todo => (
                todo.toLowerCase().includes(props.keyword.toLowerCase())
            ))
        }
        todoList = filteredTodos.map((todo, i) => <li key={i}>{todo}</li>)
    }
    return <ul>{todoList}</ul>
}
export default TodoList;