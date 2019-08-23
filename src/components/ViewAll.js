import React, {Component} from 'react';
import BlogEntry from './BlogEntry';

export default class ViewAll extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    }
    this.updatePosts = this.updatePosts.bind(this);
  }
  updatePosts(post) {
    let newEntries = [...this.state.entries]
    newEntries.unshift(post)
    this.setState({entries: newEntries})
  }
  render() {

    console.log(this.state.entries)

    const {entries} = this.state;
    
    const entriesMapped = entries.length > 0 
      ? entries.map((entry, i) => {
        return (
          <div key={i}>
            <h1>{entry.title}</h1>
            <h3>{entry.author}</h3>
            <p>{entry.date}</p>
            <h4>{entry.postEntry}</h4>
          </div>
        )
      })
      : null

    return (
      <div>
        <BlogEntry updatePosts={this.updatePosts} />
        {entriesMapped}
      </div>

    )
  }
}