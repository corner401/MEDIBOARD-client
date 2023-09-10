// // 기존
import React from "react";
import ChartCard from "./ChartCard";

const ChartList = (props) => {
    const data = props.data || null; // 차트 배열

    const ChartList = data.map((data, index) => {
        return <ChartCard data={data} key={index} />;
    });

    return <div>{ChartList}</div>;
};

export default ChartList;



// 드래그엔드롭1
// import React from "react";
// import ChartCard from "./ChartCard";

// const ChartList = (props) => {
//     const data = props.data || null; // 차트 배열

//     const ChartList = data.map((data, index) => {
//         return <ChartCard data={data} key={index} />;
//     });

//     const handleDragOver = (e) => { // 드래그엔드롭
//         e.preventDefault();
//     };
    
//     const handleDrop = (e) => {
//         e.preventDefault();
//         const droppedData = JSON.parse(e.dataTransfer.getData("text/plain"));
    
//         // 이동할 카드를 찾아서 업데이트
//         const updatedCards = cards.map(() =>
//             card.id === droppedData.id ? { ...card, x: droppedData.x, y: droppedData.y } : card
//         );
    
//         setCards(updatedCards);
//     };

//     return <div
//         className="chart-list"
//         // onDragOver={handleDragOver}
//         // onDrop={handleDrop}
//     >
//         {ChartList}
//     </div>;
// };

// export default ChartList;


// 추가 및 수정. 드래그엔드롭
// import React, { useState } from "react";
// import ChartCard from "./ChartCard";

// const ChartList = (props) => {
//     const [cards, setCards] = useState(props.data || []);
//     let draggedItemIndex = null;

//     const handleDragStart = (e, index) => {
//         draggedItemIndex = index;
//         setTimeout(() => {
//             e.target.style.display = 'none';
//         }, 0);
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };
    
//     const handleDrop = (e, index) => {
//         e.preventDefault();
        
//         // Copy the cards to a new list
//         const newCards = [...cards];

//         // Move the item
//         const draggedItem = cards[draggedItemIndex];
//         newCards.splice(draggedItemIndex, 1);
//         newCards.splice(index, 0, draggedItem);
//         setCards(newCards);

//         e.target.style.display = '';
//     };

//     return (
//         <div
//             className="chart-list"
//         >
//             {cards.map((data, index) => (
//                 <div
//                     key={index}
//                     onDragOver={handleDragOver}
//                     onDrop={(e) => handleDrop(e, index)}
//                 >
//                     <ChartCard data={data} index={index} onDragStart={handleDragStart} />
//                 </div>
//             ))}
//         </div>
//     );
// };
// export default ChartList;


//* 드래그엔드롭 3
// import React, { useState } from "react";
// import ChartCard from "./ChartCard";

// const ChartList = (props) => {
//     const [cards, setCards] = useState(props.data || []);
//     let draggedItemIndex = null;

//     const handleDragStart = (e, index) => {
//         draggedItemIndex = index;
//         setTimeout(() => {
//             e.target.style.display = 'none';
//         }, 0);
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };
    
//     const handleDrop = (e, index) => {
//         e.preventDefault();
        
//         const newCards = [...cards];

//         const draggedItem = cards[draggedItemIndex];
//         newCards.splice(draggedItemIndex, 1);
//         newCards.splice(index, 0, draggedItem);
        
//         setCards(newCards);

//         e.target.style.display = ''; // Reset the display style
//     };

//     return (
//         <div className="chart-list">
//             {cards.map((data, index) => (
//                 <div 
//                     key={index}
//                     onDragOver={handleDragOver}
//                     onDrop={(e) => handleDrop(e, index)}
//                 >
//                     <ChartCard data={data} index={index} onDragStart={handleDragStart} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChartList;
