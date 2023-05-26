import React from "react";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#FF8C00',
    color: '#000',
    textAlign: 'center',
    padding: '10px'
}

export default Header;