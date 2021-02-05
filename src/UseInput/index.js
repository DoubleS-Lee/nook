import React from 'react';
import useInput from "./UseInput";


const useInputApp = () => {
    const noAt = value => !value.includes("@");
    // 만들어준 useInput 훅을 사용한다
    const name = useInput("Mr.", noAt);
    return (
        <div>
            <li><h1>#UseInput#</h1></li>
            <h1>Hello</h1>
            <input placeholder="Name" {...name}/>
        </div>
    )
}

export default useInputApp;