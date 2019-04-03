import React from 'react'
import ToyCard from './ToyCard'

class ToyCollection extends React.Component {
  render() {
    const toyCards = this.props.toys.map(toyElement =>
      <ToyCard toy={toyElement} onLike={this.props.onLike}/>)
    return (
      <div id="toy-collection">{toyCards}</div>
    )
  }
}

export default ToyCollection
