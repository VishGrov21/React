import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        updatedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.updatedPost || (this.state.updatedPost &&
                this.state.updatedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        console.log(response);
                        this.setState({ updatedPost: response.data })
                        console.log(this.state.updatedPost)
                    })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            })
    }
    render() {
        let post = <p>Please select a Post!</p>;
        if (this.props.id) {
            post = <p>Loading...</p>;
        }
        if (this.state.updatedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.updatedPost.title}</h1>
                    <p>{this.state.updatedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;