import React from 'react'

function Notification() {
    const hasMessage = true;
  return (
    <div>
        {hasMessage && <p>You have new notifications</p>}
    </div>
  )
}
export default Notification;
