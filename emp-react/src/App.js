
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import Delete from './components/Delete';
import EmployeeCreate from './components/EmployeeCreate';


function App() {
  return (
   
    <BrowserRouter>
  
     
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Update/:id" element={<Update/>}></Route>
      <Route path="/Delete/:id" element={<Delete/>}></Route>
      <Route path="/employeeCreate" element={<EmployeeCreate/>}></Route>


      
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
