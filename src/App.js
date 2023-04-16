
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
import Submitted from './Components/Submitted/Submitted';


function App() {
  const [val, setVal] = useState('');
  const [drug, setDrug] = useState([]);
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
                <Route path='/priorauth' element={<PriorAuth setVal={setVal} />} />
                <Route path='/emr' element={<EMR drug={drug}/>} />
                <Route path='/details' element={<Details val={val} setDrug={setDrug} />} />
                <Route path='/questionnaire/:id' element={<Questionnaire drug={drug} />} />
                <Route path='/submitted' element={<Submitted />} />

              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
