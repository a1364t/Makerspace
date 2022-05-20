import React from 'react';
import Events from './Events/Events'
import Users from './Users/Users';
import Subscribed from './Subscribed/Subscribed';
import Search from './Search';

import { HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Events />} />
          <Route path='/user' element={<Users/>} />
          <Route path='/subscribed' element={<Subscribed/>} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
