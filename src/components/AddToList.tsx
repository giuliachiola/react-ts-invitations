import React, { useState } from 'react';

import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    image: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // [e.target.name] = 'name', 'image', 'age'
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.image) {
      // check if string is empty
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.image,
        notes: input.notes,
      },
    ]);
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        value={input.age}
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image url"
        value={input.image}
        className="AddToList-input"
        onChange={handleChange}
        name="image"
      />
      <textarea
        placeholder="Notes"
        value={input.notes}
        className="AddToList-input"
        onChange={handleChange}
        name="notes"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
