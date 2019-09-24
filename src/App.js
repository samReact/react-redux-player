import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducers';

const store = createStore(rootReducer);

function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <div className="App">
        <p>Salut</p>
      </div>
    </Provider>
  );
}

export default App;
