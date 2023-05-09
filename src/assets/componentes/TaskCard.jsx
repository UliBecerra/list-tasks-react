import { useDispatch } from "react-redux"
import { changeDoneTask, deleteTask, changeShowModal, setTaskToEdit } from "../store/slices/todo.slice"

function TaskCard({task}) {
  const dispatch = useDispatch()
  const handleClickDelete = () => {
    
    dispatch(deleteTask(task.id))
  }
  const handleCangeDone = () => {
    dispatch(changeDoneTask(task.id))
  }

  const handleClickEdit = () => {
    dispatch(changeShowModal())
    dispatch(setTaskToEdit(task))
  }
  return (
    <article className="grid gap-2 border-b-2 pb-4 border-indigo-500 ">
      <div className={`flex items-center gap-2 text-xl ${task.done ? 'line-through' : ''}`}>
        <input  className="w-6 aspect-square accent-indigo-500"  type="checkbox" checked={task.done} onChange={handleCangeDone}/>
        <h3 className="capitalize text-indigo-500 font-semibold">{task.title}</h3>
      </div>
      <p className={`${task.done ? 'line-through' : ''}`}>{task.description}</p>
      <div className="text-3xl flex gap-2">
        <i onClick={handleClickEdit} className="bx bxs-pencil hover:text-indigo-500 cursor-pointer transition-colors"></i>
        <i onClick={handleClickDelete} className="bx bxs-trash hover:text-indigo-500 cursor-pointer transition-colors"></i>
      </div>
    </article>
  )
}

export default TaskCard