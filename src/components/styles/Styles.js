import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export const Header = styled.header`
  
  
  padding: 20px 40px;
  h1 {
    background-color: #ddd;
    padding: 20px 40px;
    margin-bottom: 10px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    color: black;
   
  }
  p {
    color: black;
    
    padding: 20px 40px;
    font-weight: 600;
  }
`;
export const SpanHeader = styled.span`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 3px 5px;
  border-radius: 5px;
`;

export const Product = styled.div`
  border: 0.5px solid grey;
  padding: 20px;
  width: 33%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  h5 {
    text-align: center;
  }
  img {
    width: 0px;
    margin-left: 24%;
  }
`;

export const SpanProduct = styled.span`
  background-color: rgb(255, 178, 178);
  padding: 3px;
  font-weight: lighter;
  color: rgb(155, 0, 0);
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  color: black;
  border-radius: 5px;
  font-family: Roboto;
  cursor: pointer;
  position: relative;
  outline: none;
  background: grey;
  border: none;
  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 5px;
    
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export const ButtonS = styled(Button)`
  background-color: red;
`;

export const Container = styled.div`
  padding: 20px 40px;
  display: flex;
  gap: 30px;
`;