import React, { useContext } from 'react'
import UserContexts from '../UserContexts'

const User = () => {
    const {data} = useContext(UserContexts);
  return (
    <div>
      Hello {data}
    </div>
  )
}

export default User
