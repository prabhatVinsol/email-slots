import React from 'react'

function SenderComponent(props) {
  return (
    <div className='Content' align='left'>
      <div>{(props.name != 'Anonymous') ? `Thanks,` : `Regards,`}</div>
      <div>{props.name}</div>  
    </div>
  )
}

export default SenderComponent