import React, { useState } from 'react';
import './App.css';

import SwitchComponent from './components/SwitchComponent';
import InputComponent from './components/InputComponent';

const App = () => {

  return (
    <div className="app">
      <div className='nav'>
        <div className='title'>ROI Calculator</div>
        <div className='close-btn'>
          <i style={{ cursor: 'pointer' }} class="fas fa-times"></i>
        </div>
      </div>

      <div className='cake'>
        <div className='text'>CAKE</div>
        <SwitchComponent />
        <div className='usd'>USD</div>
      </div>

      <InputComponent value='0.000 USD' />

      <div className='money-cake'>
        <div>
          <div className='money'>$1000</div>
          <div className='money'>$100</div>
        </div>
        <div>~ CAKE 0.000</div>
      </div>

      <h2 className='timeframe'>Timeframe</h2>

      <div>
        <div>1 Day</div>
        <div>7 Days</div>
        <div>30 Days</div>
        <div>1 Year</div>
        <div>5 Year</div>
      </div>

      <div className='enable-accelerated-apy'>
        <h2>Enable Accelerated APY</h2>
        <SwitchComponent />
      </div>

      <div className='select-tier'>Select Tier</div>

      <div className='tiers'>
        <div>Tier 1</div>
        <div>Tier 2</div>
        <div>Tier 3</div>
        <div>Tier 4</div>
        <div>Tier 5</div>
      </div>

      <div className='roi-current-rates'>ROI at Current Rates</div>

      <InputComponent value='0.00 USD' />
      <div className='cake-don'>~ 0.000 CAKE + 0.000000 DON</div>

      <div className='hide-details'>Hide Details ^</div>

      <div>
        <div className='top'>
          <div>APY</div>
          <div>9.0%</div>
        </div>

        <div>
          <ul>
            <li>Calculated based on current roles</li>
            <li>All figures are estimates provided for you convinience only, and buy no means represent guaranteed returns.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
