import { useState } from "react"

export default function ToDoList(){

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [empty, setEmpty] = useState(true);

    function handleChange(e){
        setTodo(e.target.value);

    }
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
        setEmpty(false);
    }
    function handleDelete(item){
        setTodos(todos.filter(todo => todo!==item))
        if (todos.length == 1){
            setEmpty(true);
        }
        
    }

    return(
        <>
        <div className="mainInputContainer">
            <form onSubmit={(e)=>handleSubmit(e)} className="form">
                <input type="text" onChange={(e)=>handleChange(e)} value={todo} className="input" placeholder="Enter your item..."/>
                <button className="addbtn">Add</button>
            </form>
            
        </div>

        <div className="maintodocontainer">
            {empty ? (<div className="emptyContainer"><h3 className="emptyText">Add some tasks</h3></div>): (<div className="todoContainer">
            {todos.map((item)=>(<div className="todoitem" key={item}>
                <h2>{item}</h2>
                <button className="deletebtn" onClick={()=>handleDelete(item)}>Delete</button>
            </div>))}
            
        </div>)}
        </div>
        
        
        </>
    )
}