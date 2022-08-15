import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.count,
    }
  }

  render() {
    return (
      <>
        <h1>This is a class component {this.state.count} </h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >add one</button>
        <button onClick={() => {
            this.setState({ count: this.state.count - 1})
        }}>subtract one</button>
      </>
    )
  }
}

export default ClassComponent
