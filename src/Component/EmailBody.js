import React, { Component } from 'react'
import BodyContent from 'Component/BodyContent'
import ReceiverComponent from 'Component/ReceiverComponent'
import SenderComponent from './SenderComponent'

export class EmailBody extends Component {
  render(props) {
    return (
      <div>
        <ReceiverComponent name={this.props.receiver}/>
        <BodyContent />
        <SenderComponent name={this.props.sender}/>
      </div>
    )
  }
}

export default EmailBody