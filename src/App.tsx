
import './App.css'
import Loader from './Components/elements/loader'
import { useEffect, useState } from 'react'
function App() {

  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);

  }, [])

  return (
    <>
      {Loading ? <Loader /> :
        <div className='bg-white shadow-md rounded-md p-10'>
          <h1 className="title">
            Un equipo apasionado por el mundo <span className='text-yellowsd'>digital!</span>
          </h1>
        </div>}
    </>
  )
}

export default App

