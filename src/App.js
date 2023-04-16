
import './App.css';
import SideMenu from './Components/SideMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PriorAuth from './Components/PriorAuth';
import Details from './Components/Details';
import { useState } from 'react';
import DragAndDropForm from './Components/DragAndDropForm/DragAndDropForm';
import Questionnaire from './Components/Questionnaire';
import Header from './Components/Header';
import EMR from './Components/EMR/EMR';


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
              <Header/>
              <Routes>
                <Route path='/dragdrop' element={<DragAndDropForm/>} />
                <Route path='/priorauth' element={<PriorAuth setValue={setValue} />} />
                <Route path='/emr' element={<EMR/>} />
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
