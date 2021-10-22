import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const ProgressContainer = styled.div`
  flex-grow: 1;
  background: white;
  height: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:darkred;
`;

const Progress = styled.div`
  height: 100%;
  border-radius: 5px;
  background: green;
  box-shadow: 0 0 0.75em green;
`;

export {
  ProgressBarContainer,
  Progress,
  ProgressContainer,
};