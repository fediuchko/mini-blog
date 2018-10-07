
import { searchUpdate,  getAllPosts } from '../../logic/action';


export function mapStateToProps(state = {test:"test"} ) {
    const { posts } = state;

    return {
    posts:posts
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
      
        // onQueryChange(value) {
        //     dispatch(searchUpdate({ value: value }));
        // },
        fetchAllPosts(data) {
            dispatch(getAllPosts(data))
        }

    }
}