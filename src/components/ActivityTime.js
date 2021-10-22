import React from 'react';
import {
  Progress,
  ProgressBarContainer,
  ProgressContainer,
} from './style';


const ActivityTime = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressContainer>
        <Progress style={{ width: `${progress}%` }}></Progress>
      </ProgressContainer>
    </ProgressBarContainer>
  );
};

export default ActivityTime;