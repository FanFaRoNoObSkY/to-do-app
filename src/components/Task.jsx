import './Task.css'
import checkSVG from '/check.svg'
const Task = ({task:{desc, date}, callback}) => {
    return (
        <div className="taskContainer">
            <div className="taskDescription">
                <div className="white-text taskTitle">
                    {desc}
                </div>
                <span className="white-text date">
                    Date: {date.getHours()}:{date.getMinutes()}-{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}
                </span>
            </div>
            <div className="taskActions">
                <a href="#" onClick={callback}>
                    <img src={checkSVG} alt="checkIcon"/>
                </a>
            </div>
        </div>
    )
}

export default Task