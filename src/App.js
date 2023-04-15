
import './App.css';
import SideMenu from './Components/SideMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PriorAuth from './Components/PriorAuth';
import Details from './Components/Details';
import { useState } from 'react';
import DragAndDropForm from './Components/DragAndDropForm/DragAndDropForm';
import Questionnaire from './Components/Questionnaire';


function App() {
  const [value, setValue] = useState([]);
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className='left'>
            <SideMenu />
          </div>
          <div className='right'>
            <div>

              <Routes>
                <Route path='/dragdrop' element={<DragAndDropForm/>} />
                <Route path='/priorauth' element={<PriorAuth setValue={setValue} />} />
                <Route path='/details' element={<Details value={value} setValue={setValue} />} />
                <Route path='/questionnaire' element={<Questionnaire />} />

              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
