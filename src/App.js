import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import NoteState from './Context/notes/NotesState';
import Alert from './Alert';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { useState } from 'react';
import Insta from './components/Insta';

import SearchBar from './components/Searchbar';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2500);
  }
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert} />
    <div className="container">
    <Routes>
     
      <Route element={<Home showAlert={showAlert} />} exact path='/' ></Route>
      <Route element={<Login showAlert={showAlert} />} exact path='/login' ></Route>
      <Route element={<SignUp showAlert={showAlert} />} exact path='/signup' ></Route>   
      <Route element={<Insta/>} exact path='/insta' ></Route>
      <Route element={<SearchBar/>} exact path='/searchbar' ></Route>
     
     




      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
