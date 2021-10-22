import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressContainer = styled.div`
  flex-grow: 1;
  background: white;
  height: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Progress = styled.div`
  height: 100%;
  border-radius: 5px;
  background: #03a2ca;
  box-shadow: 0 0 0.75em #03a2ca;
`;

export {
  ProgressBarContainer,
  Progress,
  ProgressContainer,
};