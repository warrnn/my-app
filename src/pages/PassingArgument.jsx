import Message from "../components/Message";
import Warning from "../components/Warning";

function PassingArgument() {
    function handleClick(name) {
        alert(`Hello, ${name}!`);
    }

    return (
        <>
            <input type="text" id="name"/>
            <button onClick={() => handleClick(document.getElementById("name").value)}>Greet</button>

            <Message isLoggedIn={false} />
            <Warning showWarning={false} />
        </>
    )
}

export default PassingArgument;