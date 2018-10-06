
import { searchUpdate, fetchAllPosts } from '../../logic/action';


export function mapStateToProps(state, ownProps) {
    const { search } = state;

    return {
        search
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
      
        onQueryChange(value) {
            dispatch(searchUpdate({ value: value }));
        },
        getAllPosts() {
            dispatch(fetchAllPosts())
        }

    }
}