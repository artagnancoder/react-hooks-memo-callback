/* import { memo } from "react" */

type ItemProps = {
    title: string
}

 function Item(props: ItemProps){
    return <li> {props.title}</li>
}

export default /* memo( */Item/* ) */ 