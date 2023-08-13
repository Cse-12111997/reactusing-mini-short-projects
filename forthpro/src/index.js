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
// 
// const img1=
const links="https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const heading={
   margin:0,
  flexDirection:'column',
  textAlign:'center',
  overflow:'hidden', 
  background:'yellow'
};
const head={
  color:'#fa9191',
  textTransform:'capitalize',
  textAlign:'center',
  fontWeight:'bold',
  textShadow:'0px 2px 4px #ffe9c5',
  margin:70,
  fontFamily:'"Josefin Sans",sans-serif'
}

ReactDOM.render(
  <>
  
  <a href={links} target="thapa">
  <h1 style={head}>Hello</h1>
  </a>,
  <div style={heading}>
  <img width={250} src={links} alt='no image'/>
  <img  width={250} src={links} alt='no image'/>
  <img  width={250}  src={links} alt='no image'/>
  <img width={250} src={links} alt='no image'/>
  </div>
  </>,
  document.getElementById('root')
 
);