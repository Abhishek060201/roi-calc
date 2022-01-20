import React, { useState, useEffect } from 'react';

import { Switch } from 'antd';

const SwitchComponent = () => {
  const [checked, setChecked] = useState(0);
  const [style, setStyle] = useState({ background: 'white' })
  const handleChecked = () => {
    setChecked(checked => !checked)
  }

  useEffect(() => {
    if (checked) {
      setStyle({ background: '#f0c642' })
    }
    else {
      setStyle({ background: 'white' })
    }
  }, [checked])
  return (
    <div>
      <Switch onChange={handleChecked} style={style} />
    </div>
  );
};

export default SwitchComponent;
