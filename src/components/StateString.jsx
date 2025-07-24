import { useState } from "react";

function StateString() {
    const [name, setName] = useState("Input Name");

    return (
        <div>
            <h1>{name}</h1>
            <input type="text" id="name" placeholder="Enter your name"/>
            <button onClick={() => setName(document.getElementById("name").value)}>Save</button>
        </div>
    )
}

export default StateString;