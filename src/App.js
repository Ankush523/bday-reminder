import logo from './logo.svg';
import './App.css';
import data from './data'
import { useState } from 'react';
import List from './List';
function App() {
  const [people,setPeople] = useState(data)
  return (
    <div className="App">
      <div>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>clear</button>
      </div>
    </div>
  );
}

export default App;
