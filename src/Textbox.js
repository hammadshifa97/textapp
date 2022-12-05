import React, { useEffect } from 'react'
import { useState } from 'react';

function Textbox(props) {

    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const myArray = ['apple' ,'apple', 'banana', 'orange'];
    const myArrayc = ['2' ,'1', '22', '22']
    //const [one, two, three] = myArray
    // const mylist = myArray.map((item)=>{

    //   return item === "apple" && <li>{item}</li>
      

    // })
    const mylist = myArray.map((item)=> item === "apple" && <li>{item}</li>)
    const newar =myArray.filter((item,index)=> myArray.indexOf(item) !== index);

    const cnarr = myArrayc.filter((item,index)=> myArrayc.indexOf(item) !== index)
    const mapnarr = cnarr.map((item)=> <li>{item}</li>)

    const newaray = [...new Set(myArray)]
    const newarr = newaray.map((item)=> <li>{item}</li>)
    
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });

    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, color: "blue" }
      });
    }
    useEffect(()=>{
      setCalculation(()=>count*2)
    },[count])

    const incCount = ()=>{
      setCount(count +1)
    }
    const decCount = ()=>{
      
        setCount(count -1)
      
    }
    

    const conUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const changetext = (event) =>{
      setText(event.target.value)
    }

    const removetxt = ()=>{
      setText(" ")
    }

    const copyText = ()=>{
      let ctext = document.getElementById('txtbox')
      ctext.select();
            navigator.clipboard.writeText(text)
            props.showAlert("Text Success Fully Copied", "success")
      }

      const removeextraspaces = () =>{
        let rmp = text.split(/[ ]+/)
        setText(rmp.join(" "))
      }



  return (
    <div className='container col-md-8 pt-5'style={{ color: (props.mode === 'light'? 'black':  'white')  }}>

    <div className="form-group">
      <h1>Free Online Words Counter 2023</h1>
      <textarea className="form-control" id="txtbox" placeholder='Enter Your Text Here'
      rows="8" value={text} onChange={changetext}></textarea>
    </div> <br/>
    <button className='btn btn-primary mx-2' onClick={conUpper}> Convert To UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={copyText}> Copy Text</button>
    <button className='btn btn-primary mx-2' onClick={removetxt}> Clear Text</button>
    <button className='btn btn-primary mx-2' onClick={removeextraspaces}> Remove Extra Spaces</button>
      <div>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} Word and {text.length} Characters. Can Read In {0.008 * text.split(" ").length} Minutes </p>
      <h3>Text Preview</h3>
      <p>{text}</p>
      </div>
      
      <div>
      <button className='btn btn-success' onClick={incCount}> + </button> """"""
      Counter: {count}
      <button  className='btn btn-danger'  disabled={count === 0 ? true : false} onClick={decCount}> - </button>
      calculation:{calculation}
      <br/>
      <p>{mylist}</p>
      <br/>
      <p>{newar}</p> <br/>
      <p>{mapnarr}</p>
      <br/>
      <li>{newarr}</li>
      <br/>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
      </div>

    
    </div>
  )
}

export default Textbox