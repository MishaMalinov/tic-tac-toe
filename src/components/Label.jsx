
function Label({turn,winner}){
    let text = ''
    if(winner){
        text= `Winner is ${winner}`
    }else{
        text = `Next player: ${turn?"X":"O"}`
    }
    return(
        <div className="label">
            {text}
        </div>
    )
}
export default Label;