import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes/Routes';
import reducersCombine from './reducers/filters';
import reportWebVitals from './reportWebVitals';
import { initialState } from './actions';

const store = createStore(reducersCombine, initialState);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
reportWebVitals();
