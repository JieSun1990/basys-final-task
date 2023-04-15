import React from 'react';
import './styles.css'
function ProgressBar2() {
  return (
    <div id="wrapper">
      <div className="progress">
        <div className="bar">
          <div className="bar__fill" style={{ width: '33%' }}></div>
        </div>
        <div className="point point--complete">
          <div className="bullet"></div>
          <label>Drag & Drop Feature</label>
        </div>
        <div className='point point--active'>
          <div className="bullet"></div>
          <label>Ontolgy Search</label>
        </div>
        <div className="point">
          <div className="bullet"></div>
          <label>EMR</label>
        </div>
        <div className="point">
          <div className="bullet"></div>
          <label>Questionnaire Optimisation</label>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar2;