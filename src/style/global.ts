import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{    
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    background: #ffffff;
    width: 100%;
    height: 80%;
}

header {
    width: 100%;
    height: 80px;
    background: #D40054;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

button{
    /* margin: auto; */
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    border-radius: 100px;
    padding: 15px 30px;
    width: 60%;
    /* text-align:left; */
    transition: 0.5s;
    color: #ffffff;
    background: #13132B;
    font-size: 20px;
    font-weight: 300;
    border: none;
    margin: 0 auto;
}

button:hover{
    color: #13132B;
    background: #D40054;
    font-weight: 300;
}

a{
    text-decoration:none;
}

footer {
    width: 100%;
    height: 80px;
    background: #D40054;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #ffffff;
    position: absolute;
    bottom: 0px;
  }
`