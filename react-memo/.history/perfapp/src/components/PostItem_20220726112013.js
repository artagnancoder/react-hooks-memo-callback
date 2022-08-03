//Componente estava sofrendo renderização desnecessária quando o estado do PostList mudava.

export default function PostItem({post}) {
    return (
        <li>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
        </li>
    )
}
