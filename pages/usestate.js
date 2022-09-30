
import React, { useState } from 'react'

 const usestatecomp = () => {
    // const [name,setName]=useState('kavi');
    // const [age,setAge]=useState(25);
    // const [increment,setIncrement]=useState(0);
    const [data, setData] = useState("");
const [list, setList] = useState([]);
    const handleSubmit = (event) => {
        setList((oldData) => [...oldData, data]);
        setData("");
        event.preventDefault();
       };
    //   const addTodo = text => {
    //     const newTodos = [...todos, { text }];
    //     setTodos(newTodos);
    //   };
    //   const markTodo = index => {
    //     const newTodos = [...todos];
    //     newTodos[index].isDone = true;
    //     setTodos(newTodos);
    //   };
      // const removeTodo = (index) => {
      //   const newTodos = [...list];
      //   newTodos.splice(index, 1);
      //   setList(newTodos);
      // };
    // const handleclick=()=>{
    //     setName("arun")
    //     setAge(60)
    // }
    
  return (
    <div>
       
    
{/* <p> my name is {name} and my age is {age}</p>
<button onClick={()=>setName('arun') && setAge(60)}>click me</button>
<div><button onClick={()=>setIncrement(increment+1)}>+</button>
<button onClick={()=>setIncrement(increment-1)}>-</button></div>
<div>your cart count {increment} :)</div> */}


<form onSubmit={(e) => handleSubmit(e)}>
<label>
Enter Task:
<input
type='text'
value={data}
onChange={(e) =>setData(e.target.value,[{data,...list}])} />
<input type='submit' value='Submit' />
<div> {list.map((data)=> <div>{data}  
<button> deletewq</button>
  </div> )}
  </div> 
</label>
</form>
</div>
  )
}
export default usestatecomp