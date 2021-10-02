import { ReactElement } from "react";
import { GameIconContainer, GameIconImgContainer } from "./style";
import { CARD_GAME, LINE_GAME } from "@util/strings";
import { commaFormat } from "@util/utils";
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
      <p>{gameName}</p>
      <button className="game-start-btn">{"게임하기"}</button>
      <div className="best-score-container">
        <div className="best-score-item">
          <p>{"개인 최고기록"}</p>
          <p>{commaFormat(myBestScore) + "점"}</p>
        </div>
        <div className="best-score-item">
          <p>{"전체 최고기록"}</p>
          <p>{commaFormat(totalBestScore) + "점"}</p>
        </div>
      </div>
    </GameIconContainer>);
} 