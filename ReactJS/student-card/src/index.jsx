import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Container from './components/Layout/Container.jsx'
import { StudentCard } from './components/DataDisplay/Card.jsx'
import { ToggleButton } from './components/UI/Button.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container hvCenter={true} bgColor={{light: 'bg-slate-200', dark: 'bg-neutral-700'}}>
      <div className={'absolute top-0 right-0 mt-16 mr-20'}>
        <ToggleButton />
      </div>
      <StudentCard instituionOnClick={() => {alert('Hello World!')}} imageOnClick={() => {alert('Yep. It\'s me')}} />
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
