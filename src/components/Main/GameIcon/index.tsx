import { ReactElement } from "react";
import { GameIconContainer, GameIconImgContainer } from "./style";
import { CARD_GAME, LINE_GAME, MY_BEST, TOTAL_BEST, PLAY_GAME } from "@util/strings";
import { scoreFormat } from "@util/utils";
import CardGameIcon from '@img/Main/CardGame.png';
import LineGameIcon from '@img/Main/LineGame.png';

interface GameIconProps {
  gameName: string;
  myBestScore: number;
  totalBestScore: number;
  onGameStart: () => void;
}

export default function GameIcon(props: GameIconProps): ReactElement {
  const { gameName, myBestScore, totalBestScore } = props;
  let gameIcon: ReactElement;

  switch (gameName) {
    case CARD_GAME:
      gameIcon = <img src={CardGameIcon} />
      break;
    case LINE_GAME:
      gameIcon = <img src={LineGameIcon} />
      break;
    default:
      gameIcon = <img src="" />
      break;
  }

  return (
    <GameIconContainer>
      <GameIconImgContainer>
        {gameIcon}
      </GameIconImgContainer>
      <p className="game-title">{gameName}</p>
      <button className="game-start-btn">{PLAY_GAME}</button>
      <div className="best-score-container">
        <div className="best-score-item">
          <p>{MY_BEST}</p>
          <p>{scoreFormat(myBestScore)}</p>
        </div>
        <div className="best-score-item">
          <p>{TOTAL_BEST}</p>
          <p>{scoreFormat(totalBestScore)}</p>
        </div>
      </div>
    </GameIconContainer>);
} 