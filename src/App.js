import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import CovidData from './components/CovidData/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <CovidData />
        </Provider>
      </Router>
    </div>
  );
}

export default App;