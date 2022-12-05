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
    <div className="container">
      /*
      <Navbar title="Words Counter" toggle={bgtoggle} mode={mode} />
      <Alert alert={alert}/>
      <Textbox showAlert={showAlert} mode={mode}/>*/
      <h1> Funny Videos 2022 | Instant Regret | Fails Of The Week | Fail Compilation 2022 | Fails | RandomFails </h1>
      <br>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8649682487259297"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-8649682487259297" data-ad-slot="5009537847"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    <br>
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/yXG7wXI5U2I" title="Funny Videos 2022 | Instant Regret | Fails Of The Week | Fail Compilation 2022 | Fails | RandomFails" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
     <br>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8649682487259297"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-8649682487259297" data-ad-slot="5009537847"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
  );
}

export default App;
