//Componente estava sofrendo renderização desnecessária quando o estado do PostList mudava.
//O problema é solucionado exportando o componente como argumento do memo

import { memo } from "react"

function PostItem({post}) {
    return (
        <li>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
        </li>
    )
}

export default memo(PostItem)