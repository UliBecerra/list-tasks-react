import { useDispatch, useSelector } from "react-redux"
import { addTask, changeShowModal , setTaskToEdit, updateTask} from "../store/slices/todo.slice"
import { useForm } from "react-hook-form"
import { v4 as uuid } from 'uuid' 
import { useEffect } from "react"

const DEFAULT_VALUES = {
  title: "",
  description: ""
}


function Modal() {

  const {handleSubmit, register, reset} = useForm()
/* 
  TODO: Otra forma de que el modal desaparesca. 
  *${isShowModal ? "opacity-100 visible" : "opacity-0 invisible"} --La duracion funciona
   *${isShowModal ? "visible " : "hidden"} --No funciona la duracion
  

*/  const {isShowModal, taskToEdit} = useSelector((store) => store.todo)
  const dispatch = useDispatch()
  
  const hiddenShowModal = () =>{ 
    dispatch(changeShowModal())
    
  }
  const submit = (data) => {
    if (taskToEdit) {
      const newTask ={
        /* ...taskToEdit */
        ...data,
        id: taskToEdit.id,
        done: taskToEdit.done
      }
      dispatch(updateTask(newTask))
      dispatch(setTaskToEdit(null))
    }else{
      
    const newTask ={
      ...data,
      id:uuid(),
      done: false
    }
    dispatch(addTask(newTask))
    
    }
    dispatch(changeShowModal())
    reset(DEFAULT_VALUES)
  }

  useEffect(() =>{
    if (taskToEdit) {
      reset(taskToEdit)
    }
  },[taskToEdit])
  return (
    <section className={`fixed top-0 right-0 bottom-0 left-0 grid place-content-center bg-black/70 
    duration-300 ${isShowModal ? "opacity-100 visible" : "opacity-0 invisible"} `}>
      <form onSubmit={handleSubmit(submit)} className="grid gap-4 w-[300px] relative py-6"> 

      <h2 className="text-3xl text-center tracking-wider ">{taskToEdit ? 'Editar tarea' : 'Nueva tarea'}</h2>
        <div className="grid gap">
          <label htmlFor="title">Titulo</label>
          <input id="title" {...register("title")}  className="font-semibold text-indigo-500 rounded-md p-2 outline-none" type="text" />
        </div>

        <div className="grid gap-1">
        <label htmlFor="description">Descripción</label>
        <textarea id="description" {...register("description") } className="text-black rounded-md p-2 outline-none" rows={6} type="text" />
        </div>
        <i onClick={hiddenShowModal} className="bx bx-x text-3xl absolute right-0 top-0 hover:text-indigo-500 transition-colors cursor-pointer duration-150 "></i>
        <button className="bg-indigo-500 px-2 rounded-md hover:bg-indigo-400 hover:tracking-wider duration-200 py-2">{
          taskToEdit ? "Guardar cambios" : "Crear tarea"
        }</button>
      </form>
    </section>
  )
}

export default Modal