import { useState } from 'react'

import Form from '../login/Form.jsx'
import MainContent from './MainContent.jsx'

import saveStorage from '../localStorage/saveStorage.js';
import getStorage from '../localStorage/getStorage.js';
export default function MainLayout(){
  // at first render this state will be 'null' so it will execute the else statement and set it to 'false'
  const [isLoggedIn, setIsLoggedIn] = useState(getStorage('isLoggedIn') || false);

  const handleLogin = () => {
    // the isLoggedIn state will be set to 'true'
    saveStorage('isLoggedIn', true);
  }

  return (
    <div className='w-full h-full bg-slate-900'>
      {isLoggedIn ? <MainContent /> : <Form handleLogin={handleLogin} />}
    </div>
  );

}