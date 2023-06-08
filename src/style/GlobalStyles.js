import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
}
body{
    background-color: #e9e9e9;
}
.color{
    color: #020d72;
}
.red{
    color: red;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.calculator{
    position: static;
    width: 415px;
    display: inline-block;
    padding: 40px;
    border-radius: 30px;
    background-color: #e9e9e9;
    box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;

}
.calculator input{
    width: 93%;
    height: 45px;
    margin: 8px;
    border-radius: 20px;
    font-size: 34px;
    text-align: end;
    padding: 0 20px;
    border: 0;
    outline: 0;
    padding-right: 10px;
    background-color: #e9e9e9;
    box-shadow: -5px -7px 9px #fff inset, 5px 11px 17px -13px #000 inset;
}
button{
    border-radius: 50px;
    font-size: 28px;
    font-weight: 500;
    background-color: #e9e9e9;
    width: 60px;
    height: 60px;
    margin: 8px;
    border: 0;
    box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;
    cursor: pointer;
    outline: 0;
}
button:hover{
    background-color: #d6d6d6;
}
.equals{
    width: 140px;
}
`;
export default GlobalStyles;