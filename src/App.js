import React, {useState} from 'react';
import Tweet from './tweet.js';
import './App.css';

//We create functions(components) and render them onto the screen.
//state is some data(can be thought of as a variable) and based on that data app changes its state
function App(){

  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   // setRed(true);
  //   setRed(!isRed);
  // }

  //when we'll get data from an API we'll save that in a state
  const [users, setUsers] = useState([
    {name: "Edwin", message: "Hello there!"},
    {name: "Mosh", message: "Just checking in :)"},
    {name: "TraversyMedia", message: "Just hit 1M subs!!"}
  ]);


  return (
    //Bts of the JSX-> React.createElement(div)
    <div className="App">
      {/* <h1>Tweeting App.</h1> 
      <Tweet name="David" message="This is a random tweet"/>
      <Tweet name="Javascript Mastery" message="Another random tweet"/>
      <Tweet name="Mosh Hamedani" message="Yet another random tweet"/>
      <Tweet name="Traversy Media" message="Very random tweet"/> */}
    
      {/* <h1 className={isRed ? 'red': ''}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

      {users.map(user => ( //didn't use curly braces because we want to return jsx
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;