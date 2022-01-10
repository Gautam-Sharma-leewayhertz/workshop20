
import { Container } from '@material-ui/core';
import './App.css';
import Navbar from './compoments/Navbar'
import RightDashboard from './compoments/RightDashboard'
import BottomButtons from './compoments/BottomButtons'
import LeftDashboard from './compoments/LeftDashboard'
import { Typography } from '@material-ui/core';


function App() {
  return (
    <div className="App">

      <div className='NavBar'>
        <Navbar/>
      </div>
      
      <div className='left-panel'>
       <div className='col1'>
       <Typography className='head'>
              Patients
          </Typography>
         <LeftDashboard/> 
         </div>
       <div className='col2'> <RightDashboard/> </div>
      </div>

      <div className="bottombuttons">
        <BottomButtons/>
      </div>

    </div>
  );
}

export default App;
