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