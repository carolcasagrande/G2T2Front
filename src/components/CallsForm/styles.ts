import styled from 'styled-components'

export const InputCalls = styled.input`
    border: none;
    background:#f7f3f7;
    width: 100%;
    text-align: center;
    color: #7e7d7d;
    margin-top: 5px;
`

export const FormCalls = styled.form`
    width:430px;
    height:400px;
    margin:auto;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;

    h1{
    font-size: 30px;
    font-weight:300px;
    margin:18px 0 30px;
    text-align: center;
    color: #13132B;
  }

  h4{
    font-size: 20px;
    font-weight: bold;
    margin:15px 0 5px;
    color: #13132B;
  }      

   input{
    display: initial;
    border: none;
    font-size: 16px;
    padding: 3px;
    font-weight: 300;
    text-align:left;
    margin: 8px 10px; 
    border-bottom: 2px solid #666;
    transition: 0.5s; 
    background:#f7f3f7;

  } 

`

export const Patient = styled.div`

`

export const InfoPatient = styled.div`
    display: flex;

    input{
    margin: 6px 8px;
    }

    h4{
    font-size: 18px;
    }
`

/* export const InfoSpecialist = styled(InfoPatient)`
` */

