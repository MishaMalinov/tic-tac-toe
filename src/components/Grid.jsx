function Grid({handleButton}){
    let table = [];
    for(let i =0;i<9;i++){
      table.push(<button className="btn" id={i} onClick={()=>{handleButton(i)}} key={i}>{null}</button>);
    }
    return(
      <div className="grid">
        {table}
      </div>
    )
    
  } 
export default Grid;