import {  Route, Routes,  } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import AppBar from './Components/Navbar/AppBar';


function App() {
  return (
    <div className="App">
    <AppBar/>
    <Routes>
      <Route path='/'  element={<Home></Home>}></Route>

      <Route path='/home'  loader={async () => {
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      }} element={<Home></Home>}></Route>

      <Route path='/about' element={<About></About> }></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
    </div>
  );
}

export default App;
