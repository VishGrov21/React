import React, { Component } from 'react';
import axios from 'axios'
import Post from '../../components/Post/Post'
import './Posts.css'
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';
class Posts extends Component {
    state = {
        posts: [],
        clickedPost: null,
    }
    clickedPostHandler(id) {
        //this.props.history.push('/' + id)
        this.props.history.push({ pathname: this.props.match.url + '/' + id })
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4)
                this.setState({ posts: posts })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link 
                    //     to={{
                    //         pathname: '/' + post.id
                    //     }}>
                    <Post
                        key={post.id}
                        title={post.title}
                        click={() => this.clickedPostHandler(post.id)}
                    />
                    // </Link>
                )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                    {console.log(this.props)}
                </section>
                <Route path={this.props.match.url + '/:id'} component={FullPost} />
            </div>
        );
    }
}

export default Posts;