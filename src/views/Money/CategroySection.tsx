import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
const categoryMap = {'-': '支出', '+': '收入'};
type Keys = keyof typeof categoryMap
type Props = {
  value: Keys;
  onChange: (value: Keys) => void
}
const CategorySection: React.FC<Props> = (props) => {
  const [categoryList] = useState<Keys[]>(['+', '-']);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className = {c === category ? 'selected' : ''}
              onClick = {() => props.onChange(c)} key = {c}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};