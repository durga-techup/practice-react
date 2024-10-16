import React, { useContext, useEffect } from 'react'
import { ToastContext } from './App'
import { useDispatch, useSelector } from 'react-redux'
function Comp1() {
  const { isShow } = useContext(ToastContext)
  const showNotification = useSelector(state => state.todos.copmleted)
  return (
    <div>
      <h1>Hello 1 {showNotification ?"Yes":""}</h1>
    </div>
  )
}

export default Comp1
