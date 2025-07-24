function Warning({ showWarning }) {
    return (
        <div>
            {
                showWarning && <p>Warning: This is important!</p>
            }
        </div>
    )
}

export default Warning;