import React, { Component } from 'react';
import './App.css';
import ToyHeader from './ToyHeader'
import AddToyForm from './AddToyForm'
import ToyCollection from './ToyCollection'
import toyList from './resources/toys.js'

class App extends Component {

  constructor() {
    super()
    this.state ={
      toys: toyList
    }
  }

  addToy = (toy) => {
    this.setState({
      toys: [...this.state.toys, toy]
    })
  }

  handleLike = (toyId) => {
    const toy = this.state.toys.find(toy => toy.id === toyId)
    const newLikes = toy.likes + 1
    const toys = this.state.toys.map(t => {
      return t.id === toyId ? {...t, likes: newLikes} : t
    })
    this.setState({toys})
  }

  render() {
    return (
      <div>
        <ToyHeader />
        <AddToyForm onAddToy={this.addToy} length={this.state.toys.length}/>
        <ToyCollection toys={this.state.toys} onLike={this.handleLike}/>
      </div>
    );
  }
}

export default App;
