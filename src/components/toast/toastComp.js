import React from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
function ToastComp() {
  const showNotification = useSelector(state => state.todos.copmleted)

  if (showNotification) {
    setTimeout(() => {
      toast("Wow so easy!")

    },3000)
    }
  return (
    <div>
    </div>
  )
}

export default ToastComp
