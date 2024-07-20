export default function Log( {turns} ) {
    return <ol id="log">
        {turns.map((turn) => (<li id="log" key={`${turn.row+1}${turn.col+1}`} className={"highlighted"}>{turn.player} has selected ({turn.row + 1},{turn.col + 1})</li>))}
    </ol>;
}