
function History({list , handleHistory}){
    
    let res= [];
    for(let i in list){

        res.push(<button key={i} className="hisBtn" onClick={()=>{handleHistory(i)}}>Go to move {i}</button>)
    }
    return(
        <div className="history">
            {res}
        </div>
    )
}
export default History;