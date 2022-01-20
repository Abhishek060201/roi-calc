import React from 'react';

const InputComponent = ({ inputValue, setInputValue }) => {

  return (
    <div>
      <input
        className='input-component'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default InputComponent;
