import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-color: #20232A;
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  font-family: Montserrat, Arial, sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    color: #fdf200;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 10px 0;
  }

  h1 {
    font-size: 50px;
    text-align: center;
    margin: 0;
  }
  h1.quiz{
    margin-top: 30px;
    color: #61dafb;
  }
  h1.quiz: hover{
    color: #fdf200;
  }
  h1.app{
    margin-bottom: 30px;
    color: #ff85ea;
  }
  h1.app: hover{
    color: #fdf200;
  }

  .start, .next{
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    background-color: #00feca;
    border-radius: 5px;
    border: none;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

  .start: hover, .next: hover{
    color: #00feca;
    background-color: #20232A;
  }

`;