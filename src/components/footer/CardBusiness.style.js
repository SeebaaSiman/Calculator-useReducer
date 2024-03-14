import styled from "styled-components";
import BebasNeue from "./BebasNeue-Regular.ttf";
export const Border = styled.div`
  position: absolute;
  inset: 0px;
  border: 2px solid #bd9f67;
  opacity: 0;
  border-radius: 4px;
  transform: rotate(22deg);
  transition: all 0.5s ease-in-out;
`;

export const FrontText = styled.span`
position: absolute;
top:50%;
left: 0%;
padding: 0 4px 0 4px;
font-size: 1rem;
font-family: 'Bebas Neue',sans-serif;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
 span{font-family: 'Bebas Neue',sans-serif;
opacity: 1;
transform:translate(0%);
transition: all 0.5s ease-in-out;
 }
div{
  font-family: 'Bebas Neue',sans-serif;
  opacity: 1;
  transform:translate(0%);
  transition: all 0.5s ease-in-out;
  display: flex;
  gap:3px;
  p{

    font-family: 'Bebas Neue',sans-serif;
  }
 }
`;
export const Logo = styled.img`
  height: 95px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(1px 1px 0px #bd9f67);
  transition: all 0.8s ease-in-out;
`;

export const Text = styled.span`
position: absolute;
top:50%;
right: 60%;
  opacity: 0;font-family: 'Bebas Neue',sans-serif;
  color: #bd9f67;
  font-size: 1.1rem;
  letter-spacing: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.8s ease-in-out;
  gap: 2rem;
  a {
    text-decoration: none;
    color: #bd9f67;
    opacity: 0;
    scale: 0.4;
    transition: color 0.6s ease-in-out;
 font-family: 'Bebas Neue',sans-serif;
filter:drop-shadow(1px 2px 2px #4444);
transition: color 0.8s;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #030303;
      border-radius: 4px;
      scale: 0;
      transform-origin: left;
      transition: scale 0.8s;
    }
    &:hover {
      color: #030303;
    }
    &:hover::before {
      scale: 1;
    }
  }
`;


export const FooterContainer = styled.footer`
 @font-face {
    font-family: "Bebas Neue";
    src: url(${BebasNeue}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  color: #bd9f67;
position: relative;
font-family: 'Bebas Neue',sans-serif;
  width: 100vw;
  height: 100px;
  background: #000;
  border-top: 1px #bd9f67 solid;
  overflow: hidden;
  transition: all 0.5s ease-in-out;


  //*hover
  &:hover {
    background: #243137;
    font-family: 'Bebas Neue',sans-serif;
    border-top: 0px transparent solid;
    transform: scale(1);
    box-shadow: 2px 3px 4px #bd9f67;
    ${FrontText} {
      span{
            opacity: 0;
            transform:translate(-50%);
          }
      div{
          opacity: 0;
          transform:translate(50%);
      }
    }
    ${Logo} {
      top:50%;
      left: 50px;
      height: 75px;
      filter: drop-shadow(0px 0px 1px #bd9f67);
    }

    ${Border} {
      inset: 10px;
      opacity: 1;
      transform: rotate(0);
    }

    ${Text} {
      top:40%;
      right: 60px;
      opacity: 1;
      scale: 1;
      letter-spacing: 1px;
      a {
        opacity: 1;
        scale: 1;
      }
    }
  }
`;
