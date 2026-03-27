import { use } from "react";

export default function Posts({postsPromises}) {

    const posts = use(postsPromises);
    return(
        <>
        <h3>Total {posts.length} posts</h3>
        {
            posts.map(post => 
                <div className="card">
                <p> User id: {post.userId} </p>
                <p>ID: {post.id} </p>
                <p>title: {post.title} </p>
                <p>body: {post.body}</p>
                </div>
            )
        }
    
        </>
    )
}
