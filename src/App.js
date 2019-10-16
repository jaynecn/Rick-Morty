import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';
import Counter from './Counter';
import Header from './Header';
import CharacterList from './CharacterList';
import styled from 'styled-components';

import './App.css';


// Styled Components
const NavBar = styled.ul`
background-color: white;
  color: black;
  margin: 0;
  padding: 0;
  height: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
  color: black;
  text-decoration: none;
  padding: 15px;
  height: 16px;
}
a.activeNavButton {
  background-color: white;
  border: 2px solid grey;
  color: black;
}`

// 4: One enormous reducer
const monsterReducer = combineReducers({
  count: reducers.countReducer,
  state: reducers.characterReducer,
})

// 5: use 'create store' to create a Redux store
const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

// 6: inject the Redux store into the app using Provider.
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header />
      <NavBar>
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">But first..</NavLink>
        </li>
        <li>
          <NavLink to="/characters" activeClassName="activeNavButton"> Rick &amp; Morty Characters</NavLink>
        </li>
      </NavBar>
      <Route exact path="/" render={props => <Counter {...props} /> } />
      <Route exact path="/characters" render={props => <CharacterList {...props} /> } />
    </div>
    </Provider>
  );
}

export default App;
