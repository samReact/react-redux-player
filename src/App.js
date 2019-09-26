import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducers';

import '../node_modules/video-react/dist/video-react.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Player from './components/Player.component';
import CardList from './components/CardList.component';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Player />
      <CardList />
    </Provider>
  );
}

export default App;
