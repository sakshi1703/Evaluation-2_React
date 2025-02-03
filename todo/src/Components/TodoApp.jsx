import { useCallback } from "react";
import { useState } from "react";
import TodoInput from "./TodoInput";
import { useMemo } from "react";

const heavyTask = () => { 
    let start = Date.now(); 
    while (Date.now() - start < 400) 
        { 
            continue; 
        } 
        return true; 
    };


const TodoApp = (task)=>{
    const [todo, setTodo] =useState([])


    return(
        <div>
            <TodoInput addTodo={addTodo}/>
            <ul>
                {
                    todo.map((todo)=>{
                        <Todo
                        key={todo.id}

                        todo = {todo}
                        toggletodo = {toggletodo}
                        deletetodo = {deletetodo}
                        computedvalue = {useMemo(()=>heavyTask())}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default TodoApp