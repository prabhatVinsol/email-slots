import React from 'react'

function SenderComponent(props) {
  const senderName = props.name
  const salution = (senderName) ? `Thanks,` : `Regards,`
  const sender = (senderName) ? `${senderName}` : `Anonymous`
  return (
    <div className='Content' align='left'>
      <div>{salution}</div>
      <div>{sender}</div>  
    </div>
  )
}

export default SenderComponent