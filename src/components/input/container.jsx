import { getAllPosts } from "../../logic/action";

export function mapStateToProps(state = { test: "test" }) {
  const { posts } = state;
  return {
    posts: posts
  };
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    getInfo:() => {
      dispatch(getAllPosts());
    }
  };
}
