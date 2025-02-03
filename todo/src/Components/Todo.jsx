

const Todo =({todo, toggleTodo, deleteTodo, computedvalue})=>{
    return(
        <li>
            <span onClick={()=>toggleTodo(todo.id)}>
                {todo.text} 
                (computed: {computedvalue})
            </span>
            <button onClick={deleteTodo(todo.id)}>Delete Todo</button>
        </li>
    )
}

export default React.memo(Todo);