// import React, { useState } from 'react';
// import FoodButton from './FoodButton';
// import FoodGraph from './FoodGraph';
// import foodData from './foodData';

// const MainApp = () => {
//   const [selectedFood, setSelectedFood] = useState(null);

//   const handleFoodClick = (food) => {
//     setSelectedFood(food);
//   };

//   return (
//     <div style={{ backgroundColor: '#f2f2f2', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>
//         Food Ingredient Graphs
//       </h1>
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//         {foodData.map((food) => (
//           <FoodButton
//             key={food.name}
//             name={food.name}
//             onClick={() => handleFoodClick(food)}
//             isSelected={selectedFood && selectedFood.name === food.name}
//           />
//         ))}
//       </div>
//       {selectedFood ? (
//         <FoodGraph data={selectedFood.ingredients} />
//       ) : (
//         <p style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>Please select a food item to view its ingredient graph.</p>
//       )}
//     </div>
//   );
// };

// export default MainApp;

import React, { useState } from "react";
import FoodButton from "./FoodButton";
import FoodGraph from "./FoodGraph";
import foodData from "./foodData";

const MainApp = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const graphData = selectedFood
    ? Object.entries(selectedFood.ingredients).map(([ingredient, amount]) => ({
        ingredient,
        amount,
      }))
    : [];

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Welcome to Food Mania
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {foodData.map((food) => (
          <FoodButton
            key={food.name}
            name={food.name}
            onClick={() => handleFoodClick(food)}
            isSelected={selectedFood && selectedFood.name === food.name}
          />
        ))}
      </div>
      {selectedFood ? (
        <div>
          <h3 style={{ textAlign: "center", color: "#333" }}>
            {selectedFood.name} Ingrediants chart
          </h3>
          <FoodGraph data={graphData} />
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px", color: "#888" }}>
          Please select a food item to view its ingredient graph.
        </p>
      )}



      <p>by Shivam Maurya : 21BCP156</p>
    </div>
  );
};

export default MainApp;
