import React, { useState } from 'react';
// Components
import List from './components/List';
import AddToList from './components/AddToList';

// Styles
import './App.css';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

const App = (): JSX.Element => {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Giulia',
      age: 29,
      url: 'http://placekitten.com/200/300',
      notes: `I am a pawsome note`,
    },
  ]);

  return (
    <div className="App">
      <h1>People invited</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
