import logo from './logo.svg';
import './App.css';
import data from './data'
import { useState } from 'react';
import List from './List';
function App() {
  const [people,setPeople] = useState(data)
  return (
    <div className="App pt-[80px] px-[200px] flex flex-row justify-center">
      <div className='bg-white w-[40%] h-[fit-content] rounded-xl p-5'>
        <br/>
        <h3 className='pb-5 text-[25px] flex flex-row px-9'>{people.length} birthdays today</h3>
        <List people={people}/>
        <br/>
        <button onClick={() => setPeople([])} className="bg-gradient-to-r from-pink-700 to-pink-400 w-[300px] h-[40px] text-white shadow-xl rounded-md">Clear all</button>
      </div>
    </div>
  );
}

export default App;
