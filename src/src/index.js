import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { store } from './store/store';
import { Router } from './components/Router';
import { api } from './server/server';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router location={document.location}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();