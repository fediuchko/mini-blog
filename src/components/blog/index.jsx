import React from "react";

export class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
        comments: [],
      user:null
    };
  }
  componentWillMount() {
    return fetch(
      "https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id
    )
      .then(response => response.json())

      .then(post => {
        this.setState({
          post: post
        });
        return fetch("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.id)
            .then(response => response.json())
            .then(user => {
                console.log("user"+ JSON.stringify(user))
                this.setState({
              

                user: user
            });
            return fetch(
              "https://jsonplaceholder.typicode.com/comments?postId=" +
                this.props.match.params.id
            )
              .then(response => response.json())
              .then(comments => {
                this.setState({
                  comments: comments
                });
              });
          });
      });
  }

  render() {
    if (!this.state.post) return <div>Загрузка...</div>;
    return (
      <div>
        <h2>{this.state.post.title}</h2>
            <div>{this.state.post.body}</div>
            <div>Name:{this.state.user.name}  Username:{this.state.user.username}</div>
        <ul>
          {this.state.comments.map(comment => (
            <li key={comment.id}>
              <h5> {comment.name}</h5>
              {comment.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
