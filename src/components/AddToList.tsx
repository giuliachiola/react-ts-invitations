import React, { useState } from "react";

const AddToList = () => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    image: '',
    notes: ''
  })

  return  (
    <div className='AddToList'>
      <input type="text" placeholder='Name' value={input.name} className='AddToList-input'/>
      <input type="text" placeholder='Age' value={input.age} className='AddToList-input'/>
      <input type="text" placeholder='Image url' value={input.image} className='AddToList-input'/>
      <textarea placeholder='Notes' value={input.notes} className='AddToList-input'/>
      Add to list component
    </div>
  )
}

export default AddToList