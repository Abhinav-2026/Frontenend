import './App.css';
import { useState } from 'react';
import imageSources from './assets'; // Correct import here

function App() {
  const [roll, setRoll] = useState(''); // Initialize as an empty string
  const [order, setOrder] = useState([]);

  const showDice = () => {
    const newOrder = [];
    for (let i = 0; i < roll; i++) {
      const value = Math.floor(Math.random() * 6) + 1; // Roll a number between 1 and 6
      newOrder.push(value);
    }
    setOrder(newOrder); // Update state with new dice roll order
  };

  const handleRollChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setRoll(''); // If input is empty, set state to empty string
    } else {
      setRoll(Number(value)); // Otherwise, convert input to a number
    }
  };

  return (
    <div className="App">
      <h1>No of Dice</h1>
      <div>
        <input 
          type="number" 
          value={roll} 
          placeholder="Enter number of dice" 
          onChange={handleRollChange} // Use custom handler to manage empty input
        />
        <button type="button" onClick={showDice}>Roll</button> {/* Use onClick */}
      </div>
      <div className='grid'>
        {order.map((dice, index) => (
          imageSources[dice - 1] ? ( // Ensure the dice number matches the imageSources index
            <img key={index} src={imageSources[dice - 1]} alt={`Dice ${dice}`} style={{height:'100px',width:'100px'}}/>
          ) : (
            <p key={index}>Image not available</p>
          )
        ))}
      </div>
    </div>
  );
}

export default App;



