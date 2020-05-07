import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #20295F;
  border-bottom: 6px solid #EE6B26;

  display: flex;

`

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img {
    width: 100px;
    height: 50px;
  }

`

export const RightSide = styled.div`
   width: 50%;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   button {
      background: none;
      border:none;
      cursor: pointer;
      outline: none;
    }
  
  a, button {
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 15px;

    &:hover{
      color: #EE6B26;
    }
  }

  #notification{
    img {
      width: 25px;
      height: 30px;
    }

    span{
      background: #FFFFFF;
      color: #EE6B26;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5;
      transition: 1s;
    }
  }

  .dividir::after{
    content: "|";
    margin: 0 10px;
    color: #FFFFFF; 
  }

`