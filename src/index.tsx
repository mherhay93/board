import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import './index.css';
import store from "./redux/store";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
