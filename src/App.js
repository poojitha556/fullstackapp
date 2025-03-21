import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
