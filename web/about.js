import React, { Suspense, lazy } from 'react'
import ReactDOM, { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hello from './components/hello/hello'
// import {Hello} from '../package/index'
import './about.css';
import Loading from './components/loading/Loading';



const App = () =>{
    return (<div>
        web about: <Hello/>
    </div>)
}
ReactDOM.render(<App />, document.getElementById("app"))
