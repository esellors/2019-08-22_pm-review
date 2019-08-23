import React, { Component } from 'react'

export default class BlogEntry extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      title: '',
      author: '',
      postEntry: ''
    }
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div>
        <input 
          type='date'
          id='date-input' 
          name='date' 
          onChange={this.handleInput}
          placeholder='date' />
        <input 
          id='title-input' 
          name='title' 
          onChange={this.handleInput}
          placeholder='title' />
        <input 
          id='author-name' 
          name='author' 
          onChange={this.handleInput}
          placeholder='author' />
        <textarea 
          id='post-entry' 
          name='postEntry' 
          onChange={this.handleInput}
          placeholder='your post' />
        <button onClick={() => this.props.updatePosts(this.state)}>Post</button>
      </div>
    );
  }
}