import { useEffect, useState } from "react"
import PostItem from "./PostItem"

export default function PostList() {

    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
            response.json().then(data => {
                setPosts(data)
            })
        })
    }, [])

    return(
        <>
        <input onChange={e => setNewPost(e.target.value)}></input>
        <div>
        <ul>
            {posts.map(post => <PostItem post={post} key={post.id}/>)}
        </ul>
        </div>
        </> 
    )
}