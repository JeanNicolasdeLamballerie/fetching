import React, {useState, useEffect} from 'react';
import axios from 'axios';
let App = () => {
  let [APICall, setAPI] = useState([]);
  let [change, setChange] = useState(0);
  let [count, setCount] = useState(1)
  // Fetches the API depending on the Count value
  useEffect(() => {
    const APIfetch = async () => {
      const result = await axios(`https://quests.wilders.dev/simpsons-quotes/quotes?count=${count}`);
      setAPI(result.data)
    }
    APIfetch();
  }, [change, count] // will be re-rendered if any of those changes
   );
 // Changes the amount of quotes displayed when called
function update(event) {
  setCount(event.target.value)
}
  return(
    <>
    <div  style=
      {{
      display:'flex',
      justifyContent: 'center',
      textAlign:'center',
      backgroundColor: `#00F${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
      }}>
      {//resets the number of API and meaninglessly updates the state Change just to make sure the element is 
      //re-rendered even if count=count(doesnt re-render when state doesn't change)
      }
    <button  onClick={ () => { setCount(1); setChange(change+1)}}
      style=
      {{
      fontWeight:'bold',
      fontSize:'30px',
      display:'flex',
      justifySelf: 'center',
      textAlign:'center',
      backgroundColor: `#00F${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
      }}>
   reset
   </button>
   {
     // uses the function update to update and re-render the number of quote according to the value entered
   }
   <input onChange={(event) => update(event) } type='number' placeholder=' set number of quotes '></input>
   {
     // Renders a div with a background color in a random green-ish
   }
   </div>
    {APICall.map((x,y)=> <div style=
      {{
      display:'flex',
      justifyContent: 'center',
      textAlign:'center',
      backgroundColor: `#00F${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
      }}>


      {
        // Displays the quote, name and character in the div.
      }
      <div key={y}>{x.quote}</div>

      <label style={{
        fontStyle:'italic',
        fontWeight:'bold'
        
      }} key={y+100}> - {x.character}</label>
      <img key={y+1000} src={x.image} alt="cannot display this at the moment"/>
      </div>)}
  </>
  )
}

export default App;