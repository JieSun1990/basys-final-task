import React from 'react';
import './styles.css'
function ProgressBar({value}) {
  return (
    <div id="wrapper">
      <div className="progress">
        <div className="bar">
          <div className="bar__fill" style={{ width: '0%' }}></div>
        </div>
        <div className="point point--active">
          <div className="bullet"></div>
          <label>Step 1</label>
        </div>
        <div className='point'>
          <div className="bullet"></div>
          <label>Step 2</label>
        </div>
        <div className="point">
          <div className="bullet"></div>
          <label>Step 3</label>
        </div>
        <div className="point">
          <div className="bullet"></div>
          <label>Step 4</label>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;