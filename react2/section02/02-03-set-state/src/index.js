import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Two from './routes/two';
import One from './routes/one';
import Board from './routes/board1';
import BoardRefactoring from './routes/board2-refactoring';

const pageList = createBrowserRouter([
    {path:"/", element:<App/>}, 
    {path:"/one", element:<One />}, 
    {path:"/two", element:<Two />}, 
    {path:"/board1", element:<Board />}, 
    {path:"/board2-refactoring", element:<Board />}, 

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={pageList}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
