import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import createStore from './reducks/store/store';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as History from 'history';


const container = document.getElementById('root')!;
/** URIの履歴を保持するhistory変数 */
const history = History.createBrowserHistory();
/** reduxのストア定義 */
const store = createStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <App/>
    </ConnectedRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
