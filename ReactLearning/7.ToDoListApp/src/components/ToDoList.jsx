import { useState } from "react"

export default function ToDoList(){

    const [todo, setTodo] = useState({name:"", done:false});
    const [todos, setTodos] = useState([]);
    const [empty, setEmpty] = useState(true);

    function handleChange(e){
        setTodo({name:e.target.value,done:false});

    }
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo.name]);
        setTodo({name:"", done:false});
        setEmpty(false);
    }
    function handleDelete(item){
        setTodos(todos.filter(todo => todo!==item))
        if (todos.length == 1){
            setEmpty(true);
        }
        
    }
    function handleClick(name){
        setTodos(todos.map((todo)=>todo.name === name ? {...todo, done:!todo.done} : todo));
        console.log(todos);
    }

    return(
        <>
        <div className="mainInputContainer">
            <form onSubmit={(e)=>handleSubmit(e)} className="form">
                <input type="text" onChange={(e)=>handleChange(e)} value={todo.name} className="input" placeholder="Enter your item..."/>
                <button className="addbtn">Add</button>
            </form>
            
        </div>

        <div className="maintodocontainer">
            {empty ? (<div className="emptyContainer"><h3 className="emptyText">Add some tasks</h3></div>): (<div className="todoContainer">
            {todos.map((item,index)=>(<div className="todoitem" key={item.name}>
                <h2 onClick={()=>handleClick(item.name)}>{item.name}</h2>
                <button className="deletebtn" onClick={()=>handleDelete(item)}>Delete</button>
            </div>))}
            
        </div>)}
        </div>
        
        
        </>
    )
}