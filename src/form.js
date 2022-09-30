
import React from 'react'

export const Form = (input,setInput,todos,setTodos) => {
    const onInputChange=(e)=>{
        setInput(e.target.value)
    }
  return (
  <form onSubmit={onFormSubmit}>
    <input type='text' placeholder='enter a task' required onChange={onInputChange}/>
    <button type='submit' value={input}></button>

  </form>
  )
}
