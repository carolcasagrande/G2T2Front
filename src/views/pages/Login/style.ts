import styled from 'styled-components';
  
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  }

  aside{
    width: 100%;

    img{
      width: 100%;
      height: 750px;
    }
  }

  header img{
    padding: 15px;
    width: 70%;
  }

`

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  form{
    width:430px;
    height:450px;
    background-color:#ffffff;
    margin:auto;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;  
    h1{
    font-size: 26px;
    font-weight:300px;
    margin:18px 0 5px;
    text-align: center;
  }
    input{
      display: initial;
      border: none;
      font-size: 16px;
      padding: 8px;
      font-weight: 300;
      text-align:left;
      width: 85%;
      margin: 30px 25px;
      border-bottom: 2px solid #666;
      transition: 0.5s;
    }
  }
`

  
