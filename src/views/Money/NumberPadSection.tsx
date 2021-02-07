import styled from 'styled-components';

const NumberPad = styled.section`
  display: flex;
  flex-direction: column;
  > output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);  }
  > div{
    float:left;flex-wrap: wrap;
    > button{
      border: none;
      font-size: 18px;
      width: 20%;height: 64px;
      &.zero{
        width: 40%;
      }
      &.ok{
        height: 128px;
        float: right;
      }
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(6){
        background: #e0e0e0;
      }
      &:nth-child(3),&:nth-child(7),
      &:nth-child(11){
        background: #d3d3d3;
      }
      &:nth-child(4),&:nth-child(8),
      &:nth-child(12),&:nth-child(16){
        background: #c1c1c1;
      }
      &:nth-child(5),&:nth-child(9),
      &:nth-child(13){
        background: #d8d8d8;
      }
      &:nth-child(10),&:nth-child(14),&:nth-child(17){
        background: #a9a9a9;
      }
      &:nth-child(18){
        background:#9a9a9a;
      }
      &:nth-child(15){
      background: #8b8b8b;
      }
    }
  }
`;

export {NumberPad}