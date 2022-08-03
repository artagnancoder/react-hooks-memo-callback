import { useEffect, useState } from "react"

export default function PostList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
            response.json().then(data => {
                setPosts(data)
            })
        })
    }, [])

    return(
        <div>
        <ul>
            {posts.map(post => <div key={post.id}> {post.title}</div>)}
        </ul>
        </div>
    )
}