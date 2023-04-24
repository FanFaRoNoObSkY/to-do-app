import { useRef, useState } from 'react'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const inputRef = useRef()

  const addHandler = (e) => {
    // Prevent submit on click
    e.preventDefault()
    if(inputRef.current.value!="") {
      const newTaskList =  tasks.concat({desc:inputRef.current.value, date:new Date()})
      setTasks(newTaskList)
      inputRef.current.value = ""
    }
  }

  const doneHandler = (index) => {
    const newTaskList = tasks.filter((e,i)=>{
      return i!=index
    })
    setTasks(newTaskList)
  }

  return (
    <div className="appContainer">
      <div className="header">
        <h1 className="white-text">To do app</h1>
      </div>
      <form className="formContainer">
        <input className="text-input" ref={inputRef} type="text" placeholder='Homework, play, meeting, etc'/> 
        <input className="button" type="submit" value="Add"onClick={addHandler}/>
      </form>
      <div className="listContainer">
        {
          tasks.length>0?<ToDoList tasks={tasks} callback={doneHandler}/>
          :
          <div className='gray-text comment'>
            There are no more pending tasks
          </div>
        }
      </div>
    </div>
  )
}

export default App
