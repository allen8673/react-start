import React, { Suspense, lazy } from 'react'
import ReactDOM, { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hi from './components/hi/hi'
import './index.css';
import Loading from './components/loading/Loading';



const App = () =>{
    return (<div>
        src: <Hi/>
    </div>)
//    return( 
//    <Router>
//     <Suspense fallback={<Loading/>}>
//         <Switch>
//             <Route exact path="/" component={Hello} />
//             {/* <Route path="/login" component={Login} />
//             <Route path="/home" component={Home} /> */}
//             {/* <PrivateRoute path="/home" component={Home} /> */}
//         </Switch>
//     </Suspense>
// </Router>) 
}
ReactDOM.render(<App />, document.getElementById("app"))
// render();
