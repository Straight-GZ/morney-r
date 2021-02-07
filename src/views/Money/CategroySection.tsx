import styled from 'styled-components';

const CategorySection = styled.section`
 font-size: 24px;
  > ul{
    display: flex;
    background: #c4c4c4;
    > li{
      width: 50%;
      padding: 16px 0;
      text-align: center;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        background:#333;
        height: 3px;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

export {CategorySection}