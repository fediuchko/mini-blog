import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SearchInput } from "./components/input";
import { createStore, applyMiddleware, compose } from "redux";
import postSaga from "./logic/saga";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import reducer from "./reducer";
import createSagaMidddelware from "redux-saga";
import { PostPage } from "./components/postPage";

const sagaMiddelware = createSagaMidddelware();
const middleware = [sagaMiddelware];
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
sagaMiddelware.run(postSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SearchInput} />

        <Route path="/:id" component={PostPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
