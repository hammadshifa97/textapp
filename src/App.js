import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import Textbox from './Textbox';

function App() {

    const [mode, setMode] =  useState('light');
    const [alert , setAlert] = useState(null);

    const showAlert = (message,type) =>{
      setAlert(
        {
          msg:message,
          type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2500);
    }

    const bgtoggle = ()=>{
      if (mode==='light') {
        setMode('dark');
        document.body.style.background = 'grey';
        showAlert(
          "Dark Mode Has Been Enabled", "success"
        );
        
      } else {
        setMode('light')
        document.body.style.background = 'white'
        showAlert(
          "Light Mode Has Been Enabled", "success"
        );
      }
    }
    
    

  return (
    <div>
     
      <Navbar title="Words Counter" toggle={bgtoggle} mode={mode} />
      <Alert alert={alert}/>
      <Textbox showAlert={showAlert} mode={mode}/>
    
    </div>
  );
}

export default App;
