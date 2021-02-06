import React from 'react';
import UseTitle from './UseTitle';

export default function useTitleApp() {
    const titleUpdater = UseTitle("Loading...")
    setTimeout(() => titleUpdater("Home"), 3000);
    return (
        <div>
            <li><h1>#UseTitle#</h1></li>
            3초 뒤에 웹페이지의 title이 Loading... 에서 Home으로 바뀌게 됨
        </div>
    )
}