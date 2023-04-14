import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllUser from './Components/AllUser';
import AddUser from './Components/AddUser';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
      

        <Route path ='/' element={<Navbar/>}/>
      {/* <Navbar/> */}
     


      <Route path='/all' element={<AllUser/>}/>
      {/* <AllUser/> */}

      <Route path='/add' element={<AddUser/>}/>
      {/* <AddUser/> */}

      </Routes>
  
      
      
    </div>
  );
}

export default App;
