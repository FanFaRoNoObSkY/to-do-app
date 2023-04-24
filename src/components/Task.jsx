import './Task.css'
const Task = ({task:{desc, date}}) => {
    return (
        <div className="taskContainer">
            <div className="taskDescription">
            <h3>
                {desc}
            </h3>
            <span>
                {date.getHours()}:{date.getMinutes()}-{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}
            </span>
 
            </div>
            <div className="taskActions">
                <a href="#">Mark as done</a>
            </div>
        </div>
    )
}

export default Task