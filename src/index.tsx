import * as React from  "react"
import * as ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from "./store"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import CounterComponent from "./components/Counter"
import CounterComponent1 from "./components/Counter2"

function Home() {
    return <div>home</div>
}

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/counter2">Counter2</Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route exact path="/counter" component={CounterComponent}/>
                <Route exact path="/counter2" component={CounterComponent1}/>
            </React.Fragment>
        </Router>
    </Provider>
   ), document.getElementById("app")
)
