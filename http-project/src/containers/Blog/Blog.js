import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'

class Blog extends Component {
    state = {
        posts: [],
        clickedPost: null
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4)
                this.setState({ posts: posts })
            })
    }
    clickedPostHandler(id) {
        this.setState({ clickedPost: id })
        console.log(this.state)
    }
    render() {
        const posts = this.state.posts.map(post => {
            return <Post title={post.title} key={post.id} click={() => this.clickedPostHandler(post.id)} />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.clickedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;