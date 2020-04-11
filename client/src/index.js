import "./App.css";
import React from 'react';
import { render } from "react-dom";
import App from './components/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'


const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
        <App>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/:id" component={MovieDetail} />
          </Switch>
        </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);