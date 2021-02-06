import { useEffect, useRef } from 'react';

const UseClick = (initialClick) => {
    const element = useRef();
    useEffect (() => {
        // useEffect 끝에 ,[]를 추가하면 처음 실행될때 한번만 useEffect를 실행하는데
        // 이때 밑에 함수를 한번만 실행한다
        if (element.current){
            element.current.addEventListener("click", initialClick)
        }
        // useEffect return에 함수를 넣으면 이건 componentWillUnMount때 호출이 된다
        return () => {
            if (element.current){
                element.current.removeEventListener("click", initialClick)
            }
        };
    }, []);
    
    if (typeof initialClick !== "function") {
        return;
    }
    return element;
};

export default UseClick;