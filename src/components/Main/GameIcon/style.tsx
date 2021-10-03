import styled from "styled-components";

export const GameIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .game-title {
    margin-top: 16px;
  }
  
  .game-start-btn {
    width: 240px;
    height: 48px;
    background-color: var(--mustard);
    transition-duration: 0.3s;
    margin: 12px 0px 16px 0px;
    cursor: pointer;

    &:hover {
      background-color: var(--dark-mustard);
    }

    &:active {
      filter: none;
    }
  }

  .best-score-container {
    .best-score-item {
      display: flex;
      flex-direction: row;
      margin-bottom: 12px; 
      p:first-child {
        margin-right: 12px;
      }
    }
  }
`;

export const GameIconImgContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--black);
  border-radius: 12px;

  img {
    width: 84px;
    object-fit: contain;
  }
`;