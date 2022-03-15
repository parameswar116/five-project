import React from "react"

 const Game = ({ onClick, count, score }) => {
   const newScore = + 1    // newscore = score+1
   const newCount = + 1     //newcount = count+1
   return (
       <button onClick={() => onClick(newScore, newCount)}>Score</button>
   )
}
export default Game;
