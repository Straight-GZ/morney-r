import styled from 'styled-components';

const Wrapper = styled.section`
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
      width: 25%;height: 64px;
      &.zero{
        width: 50%;
      }
      &.ok{
        height: 128px;
        float: right;
      }
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(5){
        background: #e0e0e0;
      }
      &:nth-child(3),&:nth-child(6),
      &:nth-child(9){
        background: #d3d3d3;
      }
      &:nth-child(4),&:nth-child(7),
      &:nth-child(10),&:nth-child(13){
        background: #c1c1c1;
      }
      &:nth-child(8),&:nth-child(11){
        background: #d8d8d8;
      }
      &:nth-child(14){
        background: #a9a9a9;
      }
      &:nth-child(12){
        background:#9a9a9a;
      }
    }
  }
`;
export {Wrapper};