import React from 'react'

function ReceiverComponent(props) {
    const receiverName = props.name
    const renderText = (receiverName) ? `Dear ${receiverName},` : 'Hi Sir,'
  return (
    <div align='left'>
      {renderText}
    </div>
  )
}

export default ReceiverComponent