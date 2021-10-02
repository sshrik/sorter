import GameIcon from "@comp/Main/GameIcon";
import { CARD_GAME, LINE_GAME } from "@util/strings";
import { ReactElement } from "react";
import { MainPageContainer } from "./style";

export default function MainPage(): ReactElement {
  const startCardGame = () => { };
  const startLineGame = () => { };

  return (
    <MainPageContainer>
      <div className="main-header">
        <h1>정렬하기 게임</h1>
        <p>규칙에 맞춰서 정렬하세요!</p>
        <GameIcon gameName={CARD_GAME} myBestScore={300} totalBestScore={20000} onGameStart={startCardGame} />
        <GameIcon gameName={LINE_GAME} myBestScore={300} totalBestScore={20000} onGameStart={startLineGame} />
      </div>
    </MainPageContainer>);
} 