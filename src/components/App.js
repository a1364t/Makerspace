import React from 'react';
import ReactDOM from 'react-router-dom';
import Events from './Events'
import Users from './Users';
import Subscribed from './Subscribed';

import { HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Events />} />
          <Route path='/user' element={<Users/>} />
          <Route path='/subscribed' element={<Subscribed/>} />
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
