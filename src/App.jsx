import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/componentes/Header'
import TaskList from './assets/componentes/TaskList'
import Modal from './assets/componentes/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='min-h-screen bg-black text-white'>
      <Header/>
      <TaskList/>
      <Modal/>
    </section>
  )
}

export default App
