import React, { useState } from 'react'

const Todo = () => {
 const [list, setList] = useState([]);
const [task,setTask]=useState('')
const [time,setTime]=useState('')
const [edit,setEdit]=useState(false)
const [editId,setEditId]=useState()
const handleAdd = () => {
 if (edit) {
const updateArray = [...list];

updateArray[editId].task = task;
updateArray[editId].time = time;
setList(updateArray);
setEdit(false);

 }
 else {
 const todo = {task, time};

 console.log(todo);
 const newArray = [...list, todo]
 
 setList(newArray);

 console.log(list);
 
 console.log(task);
 console.log(time);
 

 }
 
 setTask('');

 setTime('');
 
 
}

const handleDelete = (id) => {
 const newArray = list.filter((val,i)=> id !== i);
 setList(newArray);

}

const handleEdit = (id) => {
 setTask(list[id].task);
 setTime(list[id].time);
 setEdit(true);
 setEditId(id);
}
 return (
 <div>
 <input placeholder='title' value={task} type='text'  onChange={(e)=>setTask(e.target.value)}/>
 <input placeholder='title' value={time} type='time' onChange={(e)=>setTime(e.target.value)}/>
 
 {task}{time}
 <button onClick={handleAdd}>{edit ? "update": "add"}</button>
 

 <div>
 <ul>
 {list.map((data,index)=>(
 <li key={index}>{data.task} - {data.time} <button onClick={()=>handleEdit(index)}>Edit</button><button onClick={()=>handleDelete(index)}>delete</button> </li>

 ))}
 </ul>
 </div>
 </div>
 )
}

export default Todo
