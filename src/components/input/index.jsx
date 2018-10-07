import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { Link } from "react-router-dom";
import "./index.scss";


export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      posts: []
    };
  }
  getInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => {
        this.setState({
          posts: posts
        });
      });
  };
  componentWillMount() {
    this.getInfo();
  }

  handleInputChange = event => {
    let updatedList = this.state.posts;
    updatedList = updatedList.filter(function(post) {
      return post.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase())||post.body.toLowerCase()
        .includes(event.target.value.toLowerCase())
    });
    this.setState({ posts: updatedList });
  };
  handleCheck = e => {
    console.log("handleCheck");
    alert(e);
  };
  render() {
    return (
      <div class="wrap">
        <header class="top-header">
          <div class="logo">
            <img
              src="https://jimenogray-dev.fosterwebmarketing.com/includes/assets/images/logos/logo-dark.png"
              alt=""
            />
          </div>
          <nav />
        </header>
        <div class="content">
          <aside>
            <div class="sidebar-header">
              <h1>Blog</h1>
              <div class="summary" />
            </div>
          </aside>
          <main>
            <div class="search">
              <input
                onChange={this.handleInputChange}
                class="form-control"
                type="search"
                placeholder="Search Blogs"
              />
              <i class="fa fa-search" />
            </div>
            <ul class="content-list">
              {this.state.posts.map(item => (
                <li class="content-item" key={item.id}>
                  <span class="details">
                    <Link to={`/${item.id}`}>
                      <h2 class="title"> {item.title}</h2>
                    </Link>
                    <span class="summary"> {item.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </main>
        </div>
        <footer>
          <small />
        </footer>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
