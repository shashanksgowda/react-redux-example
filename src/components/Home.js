import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
//import axios from 'axios';


class Home extends Component {
    /* state = {
        posts: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
          .then(res => {
            console.log(res);
            this.setState({
              posts: res.data.slice(0,10)
            });
        })
    } */

    render() {
        const {posts} = this.props;
        console.log(this.props);
        let minposts = posts;
        const allPosts = minposts.length > 0 ?
                minposts.map(post => {
                    return(
                        <div className="container" key={post.id}>
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <Link to={'/' + post.id}>
                                        <div className="card-content white-text">
                                            <span className="card-title">{post.title}</span>
                                            <p>{post.body}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }) :
        
            <div className="container">
                <span>No posts for today!</span>
            </div>
        return(
            <div>{allPosts}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Home);