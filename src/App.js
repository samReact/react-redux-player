import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducers';
import Player from './components/Player.component';
import CardList from './components/CardList.component';

const store = createStore(rootReducer);

function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <Player />
      <CardList />
    </Provider>
  );
}

export default App;
