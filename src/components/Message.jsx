function Message({ isLoggedIn }) {
    if (isLoggedIn) {
        return (
            <h1>Welcome Back!</h1>
        )
    } else if (!isLoggedIn) {
        return (
            <h1>Please Log In</h1>
        )
    }
}

export default Message;