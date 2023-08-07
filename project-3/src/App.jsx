import { useState } from "react";
import StartGame from "./component/StartGame";
import GamePlay from "./component/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted(!isGameStarted);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
