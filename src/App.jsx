import './App.css'
import React from 'react'
import UserList from './components/Userlist'
import users from "./assets/dattta.json";


function App() {
  return (
    <div className='box'>
      <UserList users = {users}/>
    </div>
  )
}

export default App;
