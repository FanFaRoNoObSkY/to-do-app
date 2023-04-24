import Task from './Task'

const ToDoList = ({tasks, callback}) => {
    return (
        <div>
            <ul>
                {tasks.map((elem,i)=>{
                    return (
                        <li key={i}><Task task={elem} callback={()=>callback(i)}/></li>
                    )
                })}
            </ul>
       </div>
    )
}

export default ToDoList