import Task from './Task'

const ToDoList = ({tasks}) => {
    return (
        <div>
            <ul>
                {tasks.map((elem,i)=>{
                    return (
                        <li key={i}><Task task={elem}/></li>
                    )
                })}
            </ul>
       </div>
    )
}

export default ToDoList