import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from './Components/Edit';
import Table from './Components/Table';
import store from './app/store';
import { Provider } from 'react-redux';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Addstudent from './Components/Addstudent';

function App() {
  
  return (
    <>
    
    {/* NavBar */}
    <Provider store={store}>
      <Navbar/>
    <Routes>
    {/* Home  */}
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>

    <Route path='/table' element={<Table />}/>
    {/* Edit  */}
    <Route path='/editStudent' element={<Edit/>}/>
    <Route path='/addStudent' element={<Addstudent/>}/>
    </Routes>
    </Provider>
    </>
  );
}

export default App;