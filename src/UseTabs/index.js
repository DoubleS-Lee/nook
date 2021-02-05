import React, { useState } from 'react';
import Usetabs from './UseTabs';

const content = [
    {
        tab:"Section 1",
        content:"I'm the content of the Section 1"
    },
    {
        tab:"Section 2",
        content:"I'm the content of the Section 2"
    }
]


export default function useTabsApp () {
    const { currentItem, changeItem } = Usetabs(0, content);
    return (
        <div>
            <li><h1>#UseTabs#</h1></li>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    )
}







// const useTabs = (initialTab, allTabs) => {
//     if (!allTabs || !Array.isArray(allTabs)) {
//         return;
//     }
//     const [currentIndex, setCurrentIndex] = useState(initialTab);
//     return {
//         currentItem: allTabs[currentIndex],
//         changeItem: setCurrentIndex
//     }
// }