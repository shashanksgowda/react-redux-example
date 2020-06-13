import React, { Component } from 'react'
import { connect } from 'react-redux';


class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    
    render() {
        const post = this.props.post;
        if (post === undefined){
            console.log('item Dleted')
            return (
                <div className="container s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Card not found</span>
                            <p>This post was deleted</p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                        <div className="center">
                            <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);