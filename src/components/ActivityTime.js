import React from 'react';
import {
  Progress,
  ProgressBarContainer,
  ProgressContainer,
  ProgressDescription,
} from './style';


const ActivityTime = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressContainer>
        <Progress style={{ width: `${progress}%` }}></Progress>
      </ProgressContainer>

      <ProgressDescription>{progress.toFixed(2)}%</ProgressDescription>
    </ProgressBarContainer>
  );
};

export default ActivityTime;