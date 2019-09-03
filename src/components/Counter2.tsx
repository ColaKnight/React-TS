import * as React from "react"
import { connect } from "react-redux"
import actions from "../store/actions/counter"
import {Store, Counter2} from "../types"


interface IProps{
    number: number,
    add: any,
    subtract: any,
    addAsync: any
}


class CounterComponent1 extends React.Component<IProps> {
  
    render () {
        let {number, add, subtract, addAsync} = this.props
        return (
            <div>
                <p>{number}</p>
                <button onClick={add}>click Me Add</button><br />
                <button onClick={subtract}>click Me Subtract</button><br />
                <button onClick={addAsync}>异步=1</button>
            </div>
        )
    }
}

let mapStateToProps = function (state:Store): Counter2 {
    return state.counter2
}

export default connect(
    mapStateToProps,
    actions
)(CounterComponent1)
