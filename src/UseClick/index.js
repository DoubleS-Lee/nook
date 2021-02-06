import React from 'react';
import UseClick from './UseClick';

export default function useClickApp() {
    const sayHello = () => console.log("say Hello")
    // UseClick 내에서 useRef를 사용해줬기 때문에 h1에서 ref={title}을 써줄수 있는 것이고
    // UseClick에서 이 h1 태그에 특정 작업을 하도록 명령을 내려줄수 있는 것이다
    const title = UseClick(sayHello);
    return (
        <div>
            <li><h1>#UseClick#</h1></li>
            <h1 ref={title}>Hi</h1>
        </div>
    )
}