import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../node_modules/video-react/dist/video-react.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from './reducers/rootReducers';
import Player from './containers/player.container';
import CardList from './components/CardList.component';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Player />
      <CardList />
    </Provider>
  );
}

export default App;
