import './App.css';
import React,{useState} from 'react';
import {Board} from './components/Board'
import { Scoreboard } from './components/Scoreboard';
import { Reset } from './components/Reset';
import Header from './components/header';

function App() {
  const wincondition=[
    [0,1,2],[3,4,5],[6,7,8],       //horizontal
    [0,3,6],[1,4,7],[2,5,8],       //vertical
    [0,4,8],[3,4,6]        //diagnol
  ]
  const [board,setboard]=useState(Array(9).fill(null))
  const [xplaying,setxplaying]=useState(true)
  const [score,setscores]=useState({xscore:0,oscore:0})
  const [gameover,setgameover]=useState(false);

  const handleboxclick=(cliind)=>{
    const updatedboard=board.map((value,ind)=>{
      if(ind===cliind){
        return xplaying===true?"X":"O";
      }
      else{
        return value;
      }
    })
    const winner=checkwinner(updatedboard)

    if(winner){
      if(winner==="O"){
        let { oscore }=score;
        oscore+=1;
        setscores({...score,oscore})
      }
      else{
        let { xscore}=score;
        xscore+=1;
        setscores({...score,xscore});
      }
    }
    console.log(score)
    setboard(updatedboard)
    setxplaying(!xplaying) //if u give false here it will be x o o o o like always x is false and it is always o except first turn
  }

  const checkwinner=(board)=>{
    for(var i=0; i<8; i++){
      const [x,y,z]=wincondition[i];
      if(board[x] && board[x]===board[y] && board[y]===board[z]){
        // console.log(board[x]);
        setgameover(true);
        return board[x];
      }
    }
  }
  const resetboard=()=>{
    setboard(Array(9).fill(null))
    setgameover(false);
  }
  const reload=()=>{
    window.location.reload(true);
  }
  return (
    <div className="App">
    
      <Scoreboard score={score} xplaying={xplaying} />
      <Board board={board} onClick={gameover? resetboard:handleboxclick} />
      <Reset resetboard={resetboard} reload={reload} />
    
      
    </div>
  );
}

export default App;
