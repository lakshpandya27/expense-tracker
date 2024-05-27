
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Calculate } from './components/CalculateTry';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/calculate' element={<Calculate/>}/>
        <Route path = '/signup' element={<Signup/>}/>
        <Route path = '/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default App;

