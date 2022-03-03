import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './components/admin';
import Login from './components/login';

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' exact element={<Login/>} />
            <Route path='/admin' element={<Admin/>} />
            
        </Routes>
    </Router>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

