import React from 'react';
import useInput from "./UseInput";


const useInputApp = () => {
    const noAt = value => !value.includes("@");
    const name = useInput("Mr.", noAt);
    return (
        <div>
            <h1>Hello</h1>
            <input placeholder="Name" {...name}/>
        </div>
    )
}

export default useInputApp;