import React from "react";
import Blog from "../blog";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

// export class SearchInput extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       posts: []
//     };
//   }
//   componentDidMount() {
//     console.log("componentDidMount" + JSON.stringify(this.props))
//   //this.props.getAllPosts()
//   }

//   handleGetValue(e) {
//     this.setState(
//       {
//         value: e.target.value
//       },
//       console.log(this.state.value)
//     );
//     this.props.onQueryChange(this.state.value);
//   }

//   render() {

//     return (
//       <div>
//         <input
//           type="search"
//           placeholder="Пoшук"
//           onChange={this.handleGetValue}
//         />
//         <Blog posts={this.state.posts} />
//         </div>
//     )
//   }
// }

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      posts: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => {
        this.setState({
          posts: posts
        });
      });
  }

  handleGetValue = e => {
    this.setState(
      {
        value: e.target.value
      },
      console.log(this.state.value)
    );
    this.props.onQueryChange(this.state.value);
  };
  handleCheck = e => {
    console.log("handleCheck")
    alert(JSON.stringify(e));
  };
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Пoшук"
          // onChange={this.handleGetValue}
        />
        <ul>
          {this.state.posts.map(item => (
            <li   onClick = {this.handleCheck}
            key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
