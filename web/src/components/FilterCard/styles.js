import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 60px;
  background: ${props => props.actived ? '#EE6B26' : '#20295F'};
  padding: 10px;
  
  cursor: pointer;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #FFFFFF;
    font-weight: bold;
    font-size: 18px;
    align-self: flex-end;
  }

  &:hover{
    background: #EE6B26;
  }
`