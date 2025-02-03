import { useState } from "react"


const Todoinput = ({addTodo})=>{
    const [task, setTask] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task.trim() === ""){
            return;
        }
        addTodo(task);
        setTask("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} placeholder="Enter Task" onChange={(e)=>setTask(e.target.value) } />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default React.memo(Todoinput);