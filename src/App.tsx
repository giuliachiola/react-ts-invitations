import React, { useState } from 'react';
// Components
import List from './components/List';
import AddToList from './components/AddToList';

// Styles
import './App.css';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Giulia',
      age: 29,
      url: 'http://placekitten.com/200/300',
      note: 'ciao ciao'
    }
  ])

  return (
    <div className="App">
      <h1>People invited</h1>
      <List people={people}/>
      <AddToList/>
    </div>
  );
}

export default App;
