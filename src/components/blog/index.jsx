import React from "react"

 function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
     );
        return (
            <div>
                {sidebar}
           <hr />
                {/* {content} */}
            </div>
        );
        // const posts = [
        //     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        //     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        //   ];
}
export default Blog