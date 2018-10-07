import React from "react";
import "./index.scss";

export class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comments: [],
      user: { name: "", username: "" }
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
        return fetch(
          "https://jsonplaceholder.typicode.com/users/" + post.userId
        )
          .then(response => response.json())
          .then(user => {
            console.log("user" + JSON.stringify(user));
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
        <div class="article">
          <div class="title">
            <h2>{this.state.post.title}</h2>
          </div>
          <div class="content">
            <div>{this.state.post.body}</div>
            <div class="small">
              <h5>Author of the article:</h5>
              {this.state.user.name} <h5> Username:</h5>
              {this.state.user.username}
            </div>
          </div>
        </div>
        <div class="article-2">
          <div class="title">
            <h2>Comments</h2>
          </div>
          <div class="glass">
            <ul>
              {this.state.comments.map(comment => (
                <li key={comment.id}>
                  <h5> {comment.name}</h5>
                  {comment.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
