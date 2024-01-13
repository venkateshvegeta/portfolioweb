import React, { useEffect, useState } from "react";
import "./styles.css";
const TicTacToe = () => {
  const [currentPlayer, setPlayer] = useState("X");
  const [squaresVal, setSquareVal] = useState({});
  const [winner, setWinner] = useState("");
  useEffect(() => {
    checkWinner();
  }, [currentPlayer]);
  const checkWinner = () => {
    const checkRows = [
      ["sq1", "sq2", "sq3"],
      ["sq4", "sq5", "sq6"],
      ["sq7", "sq8", "sq9"],
      ["sq1", "sq4", "sq7"],
      ["sq2", "sq5", "sq8"],
      ["sq3", "sq6", "sq9"],
      ["sq1", "sq5", "sq9"],
      ["sq3", "sq5", "sq7"],
    ];
    for (let i = 0; i < checkRows.length; i++) {
      let [a, b, c] = checkRows[i];
      if (
        squaresVal[`${a}`] &&
        squaresVal[`${a}`] === squaresVal[`${b}`] &&
        squaresVal[`${a}`] === squaresVal[`${c}`]
      ) {
        return setWinner(squaresVal[`${a}`]);
      }
    }
  };
  const onPlayerClick = (e) => {
    if (currentPlayer === "X") {
      setSquareVal({ ...squaresVal, [e.target.name]: currentPlayer });
      return setPlayer("O");
    }
    setSquareVal({ ...squaresVal, [e.target.name]: currentPlayer });
    return setPlayer("X");
  };
  const Squares = ({ name }) => {
    return (
      <button
        className={squaresVal[`${name}`] ? "disable" : ""}
        name={name}
        onClick={onPlayerClick}
      >
        {squaresVal[`${name}`]}
      </button>
    );
  };
  return (
    <div>
      {!winner && <h3>Current Player is {currentPlayer}</h3>}
      {winner && <h3>Winner is {winner}</h3>}
      <button
        onClick={() => {
          setSquareVal({});
          setPlayer("X");
          setWinner("");
        }}
      >
        Reset Game
      </button>
      <div className={winner ? "disable board" : "board"}>
        <Squares name="sq1" />
        <Squares name="sq2" />
        <Squares name="sq3" />
        <Squares name="sq4" />
        <Squares name="sq5" />
        <Squares name="sq6" />
        <Squares name="sq7" />
        <Squares name="sq8" />
        <Squares name="sq9" />
      </div>
    </div>
  );
};

export default TicTacToe;
