import React from 'react'

function ReceiverComponent(props) {
  return (
    <div align='left'>
      {(props.name != 'Sir') ? `Dear ${props.name},` : `Hi ${props.name},`}
    </div>
  )
}

export default ReceiverComponent