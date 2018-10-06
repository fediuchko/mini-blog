import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { SearchInput } from './components/input';
import { createStore, applyMiddleware } from "redux";
import searchSaga from './logic/saga';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import reducer from "./logic/reducer";
import createSagaMidddelware from "redux-saga";
import { PostPage } from './components/postPage';

const sagaMiddelware = createSagaMidddelware();
const middleware = [sagaMiddelware];
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);
sagaMiddelware.run(searchSaga);
// const createSagaMiddleware = ReduxSaga.default;
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(searchSaga);

//ReactDOM.render(<SearchInput />, document.getElementById('root'));
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

serviceWorker.unregister();
