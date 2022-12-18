import React from 'react'
import { UserKey } from '../../Redux/states/user'
import { clearLocalStorage } from '../../utilities'

function Logout() {
  const logOut=()=>{
    clearLocalStorage(UserKey)
  };
  return <buton onClick={logOut}>Log Out</buton>;
}

export default Logout
