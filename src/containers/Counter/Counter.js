import React, { Component } from 'react'
import './counter.css'
import bg from '../../assets/images/bg.png'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  increase() {
    this.setState({
      count: ++this.state.count
    })
  }

  decrease() {
    if (this.state.count <= 0) return
    this.setState({
      count: --this.state.count
    })
  }

  render() {
    return (
      <div className='counter'>
        <div style={{ zIndex: 2 }}>{this.state.count}</div>
        <button style={{ zIndex: 2 }} onClick={this.increase}>Increase</button>
        <button style={{ zIndex: 2 }} onClick={this.decrease}>Decrease</button>
        <img style={{ height: '50%', width: '50%', position: 'absolute', zIndex: '1' }} src={bg} />
      </div>
    )
  }
}

export default Counter