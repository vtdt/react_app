import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const fetch = await fetch("http://skrazzo.sites.hex.lv/projects/class-list/db.json")
const json = JSON.parse(fetch);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <App day = {0}></App>
  </>
);

