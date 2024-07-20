import { useState } from "react";

export default function Player({active, symbol, name}) {
  const [playerName, setPlayerName] = useState(name);
  const [edit, setEdit] = useState(false);
  function editting(event) {
    event.preventDefault();
    setEdit((wasEditing) => !wasEditing);
  }

  function changeName(event) {
    event.preventDefault();
    setPlayerName(event.target.value);
  }

  return (
    <li className={active ? "active" : undefined}>
      <form>
        <span className="player">
          {edit ? (
            <input
              type="text"
              required
              placeholder={playerName}
              onChange={changeName}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editting}>{edit ? "Save" : "Edit"}</button>
      </form>
    </li>
  );
}
