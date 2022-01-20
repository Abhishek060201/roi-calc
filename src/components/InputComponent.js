import React from 'react';

const InputComponent = ({ value, fontSize }) => {
  return (
    <div>
      <input className='input-component' value={value} />
    </div>
  );
};

export default InputComponent;
