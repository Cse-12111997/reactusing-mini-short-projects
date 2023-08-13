// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const cssstyle={
  color:'green'
}
let currDate=new Date();
currDate=currDate.getHours();
let greeting='';
if(currDate>=1 && currDate<12){
  greeting='Good Morning';
  cssstyle.color="green";
}
else if(currDate>=12 && currDate<19){
  greeting='Good Afternoon';
  cssstyle.color="orange";
}
else{
  greeting='Good Night';
  cssstyle.color="black";
}
ReactDOM.render(
  <h1>Hello Sir, <span style = {cssstyle} > {greeting}</span></h1>,
  document.getElementById('root')
);