import React from 'react';
import ReactDOM from 'react-dom/client';

import abc, { add } from "./calculator"

alert(add(1, 2));
abc()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>Hello World!</h1>
);

