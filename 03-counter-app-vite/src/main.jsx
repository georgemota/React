import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './counter-app';



ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <CounterApp  />
    </React.StrictMode>
)