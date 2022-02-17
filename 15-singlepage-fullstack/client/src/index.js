import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const btnClick = async () => {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify( {
                name: 'Ahmad',
                email: 'aaa@dd.dd'
            })
        })
        const result = await response.json();
        console.log(result);
    }
    return (
        <>
        <h1>Hello E05-1</h1>
        <button onClick={btnClick}>send</button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));