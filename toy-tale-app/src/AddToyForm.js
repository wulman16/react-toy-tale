import React from 'react'

class AddToyForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      likes: 0,
      id: this.props.length + 1
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const name = event.target.children[0].value
    // const image = event.target.children[1].value
    this.props.onAddToy(this.state)
  }

  render() {
    return (
      <div>
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a Toy!</h3>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter a toy's name..." className="input-text"></input>
          <br></br>
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange} placeholder="Enter a toy's image URL..." className="input-text"></input>
          <br></br>
          <input type="submit" name="submit" value="Create New Toy" className="submit"></input>
        </form>
      </div>
      <p id="help">Andy needs your help! <button id='new-toy-btn'>Add a new toy!</button></p>
      </div>
    )
  }
}

export default AddToyForm
