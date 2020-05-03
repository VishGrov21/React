import React, { Component, Suspense } from 'react';
import Posts from '../Posts/Posts'

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
//import NewPost from '../NewPost/NewPost';
import asyncComponent from './../../hoc/asyncComponent';

const AsyncNewPost = React.lazy(() => {
    return (import('../NewPost/NewPost'))
})
class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                exact
                                to="/posts"
                                activeClassName="my-active"
                                activeStyle={{ textDecoration: 'underline' }}>Home</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/new-post" exact render={() => <Suspense
                        fallback={<div>Loading...</div>}>
                        <AsyncNewPost />
                    </Suspense>} />
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <p>Page Not Found</p>} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>

                {/* <section className="Posts">
                    {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.clickedPost} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;