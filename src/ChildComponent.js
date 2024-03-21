import { useContext } from "react"
import { userContext } from "./UserContext"

function ChildComponent() {

    // instead of context consumer using useContext hook (to consume the contxt value)
    const contextvalue = useContext(userContext)
    console.log(contextvalue)
    return (
        <>
            <p>the product id: <b>{contextvalue.id}</b></p>
            <p>the price id: <b>{contextvalue.price}</b></p>
            <p>avaiable at: <b>{contextvalue.location}</b></p>
        </>
    )
}

export default ChildComponent;