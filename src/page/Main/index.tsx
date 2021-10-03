import GameIcon from "@comp/Main/GameIcon";
import { CARD_GAME, LINE_GAME, GAME_NAME, GAME_DETAIL } from "@util/strings";
import { ReactElement } from "react";
import { MainPageContainer } from "./style";

export default function MainPage(): ReactElement {
  const startCardGame = () => { };
  const startLineGame = () => { };

  return (
    <MainPageContainer>
      <div className="main-header">
        <h1>{GAME_NAME}</h1>
        <p>{GAME_DETAIL}</p>
      </div>
      <div className="main-icon-container">
        <GameIcon gameName={CARD_GAME} myBestScore={300} totalBestScore={20000} onGameStart={startCardGame} />
        <GameIcon gameName={LINE_GAME} myBestScore={300} totalBestScore={20000} onGameStart={startLineGame} />
      </div>
    </MainPageContainer>);
} 