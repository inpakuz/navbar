import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Pic1 from './pages/pic1';
import Pic2 from './pages/pic2';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Main from './pages/main';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/pic1' element={<Pic1/>} /> 
       <Route path='/pic2' element={<Pic2/>} /> 
       <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/' element={<Main/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;