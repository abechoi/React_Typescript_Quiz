import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #20232A;
  border-radius: 5px;
  border: 5px solid #7b61f8;
  padding: 10px;
  text-align: center;

  p {
    color: #fff;
    font-size: 20px;
  }
`

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    margin: 5px 0;
    background: ${({ correct, userClicked }) => 
      correct ?
      'green' :
      !correct && userClicked ?
      'green' :
      'red'
    }
    border-radius: 10px;
  }
`