import { useState } from "react";

function TodoList(){

    const [tasks, setTasks] = useState(["Eat Breakfast", "Walk the dog", "Go to work"]);

    function addTask(){
        const newTask = document.getElementById("task-input").value;
        document.getElementById("task-input").value="";

        setTasks(t=>([...t, newTask]));
    }
    function removeTask(index){
        setTasks(tasks.filter((_, i)=>i!==index));
    }
    function moveUp(index){

        const updatedTasks = [...tasks];
        
        if (index>0){
            
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]

            setTasks([...updatedTasks]);
        }
        
        
    }
    function moveDown(index){
        const updatedTasks = [...tasks];
        
        if (index < tasks.length - 1){
            
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]

            setTasks([...updatedTasks]);
        }

    }

    return(
        <div className="main-container">
            <h2>To-Do-List</h2>
            <div>
                <input type="text" id="task-input" placeholder="Enter a task..." className="task-input" style={{marginLeft:75}}/>
                <button onClick={addTask} className="add">Add</button>
                <ul className="unordered-list">
                    {tasks.map((task, index)=><li key={index} className="task-container">
                        <p className="task">{task}</p>
                        <button className="delete" onClick={()=>removeTask(index)}>Delete</button>
                        <button className="position" onClick={()=>moveUp(index)}>☝</button>
                        <button className="position" onClick={()=>moveDown(index)}>👇</button>
                    </li>)}
                </ul>
            </div>
        </div>
    )

}
export default TodoList;