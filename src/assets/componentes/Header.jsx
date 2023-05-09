import React from 'react'
import { changeShowModal, setTaskToEdit } from '../store/slices/todo.slice'
import { useDispatch } from 'react-redux'

function Header() {
  const dispatch = useDispatch()
  const handleClickShowModal = () => {
    dispatch(changeShowModal())
    dispatch(setTaskToEdit(null))
  }
  return (
    <header className='flex p-2 justify-between'>
      <div className='text-4xl flex items-center'>
        <i className=' bx bx-list-check text-green-500'></i>
        <h1 className='tracking-wider font-semibold'>TO<span className='text-indigo-500'>DO</span></h1>
        </div>
      <button onClick={handleClickShowModal} className='bg-indigo-500 px-2 rounded-md hover:bg-indigo-400 hover:tracking-wider duration-200'>Crear tarea</button>
     
    </header>
  )
}

export default Header
