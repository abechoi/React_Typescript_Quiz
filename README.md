# React Typescript Quiz
This is a quiz made in React / Typescript and with the instructions of the tutorial in the link.
https://www.youtube.com/watch?v=F2JCjVSZlG0&ab_channel=freeCodeCamp.org

After I complete the tutorial, I intend on implementing my own features.

## Installation & Setup
```
npx create-react-app react-quiz --template typescript
cd react-quiz/src
rm logo.svg index.css setupTests.ts App.test.tsx App.css reportWebVitals.ts 
```
index.tsx
```
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
```

App.tsx
```
import React from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return <div className='App'>Quiz</div>;
}

export default App;
```

Install styled components
```
npm i styled-components @types/styled-components      
```

