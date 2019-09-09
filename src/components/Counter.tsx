import * as React  from 'react'
import { connect } from "react-redux"
import actions from "../store/actions/counter"
import {Store, Counter} from "../types"
import {Button, Rate } from "antd"

interface IProps{
    number: number,
    add: any,
    subtract: any,
    addAsync: any
}


class CounterComponent extends React.Component<IProps> {
  
    render () {
        let {number, add, subtract, addAsync} = this.props
        return (
            <div>
                <p>{number}</p>
                <Button type="primary" onClick={add}>click Me Add</Button><br />
                <button onClick={subtract}>click Me Subtract</button><br />
                <button onClick={addAsync}>异步=1</button><br />
                <Rate />
            </div>
        )
    }
}

let mapStateToProps = function (state:Store): Counter {
    return state.counter
}

export default connect(
    mapStateToProps,
    actions
)(CounterComponent)
