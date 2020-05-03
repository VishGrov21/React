import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        updatedPost: null
    }

    componentDidMount() {
        console.log("Control Reached Full Post")
        this.loadPost();
    }

    componentDidUpdate() {
        this.loadPost();
    }

    loadPost() {
        if (this.props.match.params.id) {
            if (!this.state.updatedPost || (this.state.updatedPost &&
                this.state.updatedPost.id != this.props.match.params.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                    .then(response => {
                        console.log(response);
                        this.setState({ updatedPost: response.data })
                        console.log(this.state.updatedPost)
                    })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            })
    }
    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
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