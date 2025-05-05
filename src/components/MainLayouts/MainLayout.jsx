import { useState, useEffect } from 'react'

import Form from '../login/Form.jsx'
import MainContent from './MainContent.jsx'

export default function MainLayout(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', true)
  }
  return (
    <div className='w-full h-full'>
      {isLoggedIn ? <MainContent />  : <Form handleLogin={handleLogin} />}
    </div>
  )
}