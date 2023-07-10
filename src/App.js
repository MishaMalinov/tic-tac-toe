import './style.css';
import { useState } from 'react';
import Grid from './components/Grid';
import Label from './components/Label';
import History from './components/History';


const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {

  const [winner,setWinner]=useState(null)
  const [turn,setTurn]=useState(true)
  const [move,setMove]=useState(Array(9).fill(null))
  const [history,setHistory]=useState([Array(9).fill(null)]);
  
  let handleHistory = (n)=>{
   
    
    console.log(history[n])
    setMove(history[n]);
    for(let i =0 ; i< 9;i++){
        document.getElementById(i).innerHTML = history[n][i]
    }
    let temp = []
    for(let i =0 ;i<=n;i++){
      temp.push(history[i])
    }
    if(n< history.length-1)setWinner(null);
    setTurn(n%2===0)
    setHistory(temp);
        
  }
  function handleButton(n){
    
    if(move[n]!=null ||winner) return;
    
    let char = turn?"X":"O";
    let arr = [...move];
    arr[n]=char;
    //finding winner
    console.log(arr)
    for(let i =0 ;i< lines.length;i++){
      let resX = true;
      let resO = true;

      for(let j =0 ;j<3;j++){
          
          if(arr[lines[i][j]]!=="X")resX=false;
          if(arr[lines[i][j]]!=="O")resO=false;

      }
      if(resX || resO){
        console.log(`Winner is ${char}`)
        setWinner(char);
        break;
      }
    }
    
    
    setHistory([...history,arr]);

    setMove(arr);
    
    setTurn(!turn);
    document.getElementById(n).innerHTML=char;
  }
  return (
    <div className="App">
        <Label turn={turn} winner={winner}/>
        <div className='main'>
          <Grid handleButton={handleButton}/>
        <History list={history} handleHistory={handleHistory}/>
        </div>
        
    </div>
  );
}

export default App;
