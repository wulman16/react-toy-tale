import React from 'react'

class ToyCard extends React.Component {

  handleLike = () => {
    this.props.onLike(this.props.toy.id)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img className="toy-avatar" src={this.props.toy.image} alt={this.props.toy.name}></img>
        <p>{this.props.toy.likes ? this.props.toy.likes : 0} {this.props.toy.likes === 1 ? `Like` : `Likes`}</p>
        <button className="like-btn" onClick={this.handleLike}>Like &lt;3</button>
      </div>
    )
  }
}

export default ToyCard
