import './App.css';
import { Navbar, StudentData, EditUser, StudentLists, AddUsers, NotFound } from './components'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={< NotFound />} />
        <Route exact path='/' element={< StudentData />}></Route>
        <Route exact path='/all' element={< StudentLists />}></Route>
        <Route exact path='/add' element={< AddUsers />}></Route>
        <Route exact path='/edit/:id' element={< EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
