import logo from './logo.svg';
import './App.css';
import EmailBody from 'Component/EmailBody';
import 'Stylesheet/EmailBody.css'

function App() {
  return (
    <div className="App">
      <div className='ParentDiv'> 
        <EmailBody sender='Prabhat' receiver='XYZ'/>
      </div>
    </div>
  );
}

export default App;
