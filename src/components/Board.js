import React, { Component } from 'react'
import Note from './Note'
import '../css/Board.css'

class Board extends Component {
  constructor() {
    super()
  
    this.state = {
      notes: [
        {title: "Class Notes", body: "Always use constructors when extending another class"},
        {title: "My New Address", body: "2001 N Lonhill Phoenix, AZ 81234"},
        {title: "React Notes", body: "Everything in React is a component"},
        {body: "something"}
      ]
    }
  }

  addNote() {
    this.state.notes.push({
      title: "new note title",
      body: "new note body"
    })

    this.setState({
      notes: this.state.notes
    })
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {
              this.state.notes.map((note) => {
                return <Note title={note.title} body={note.body} />
              })
            }
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
        </div>
      </div>
    )
  }
}

export default Board