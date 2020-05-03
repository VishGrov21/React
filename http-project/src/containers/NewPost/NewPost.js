import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './NewPost.css';
import Axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submit: false,
    }

    addPostHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        };
        Axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                this.props.history.push('/posts')
                // this.setState({ submit: true })
                // console.log(this.state.submit)
            })
    }
    render() {
        let redirect = null
        if (this.state.submit) {
            redirect = <Redirect to="/posts" />
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;