import {Layout} from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategroySection';
import {useTags} from '../hooks/useTags';
import {useRecord} from '../hooks/useRecords';
import styled from 'styled-components';

const Item = styled.div`
  background: white;
  display: flex;
  font-size:18px;
  justify-content: space-between;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  }
`;
const CategoryWrapper = styled.div`
  background: white;
`;

function Statistics() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {getName} = useTags();
  const {records} = useRecord();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value = {category}
                         onChange = {category => setCategory(category)}/>

      </CategoryWrapper>
      <div>
        {records.filter(r => r.category === category).map((r, index) => {
          return <Item key = {index}>
            <div className = 'tags'>
              {r.tagIds.map((tagId, index) => <span key = {index}>{getName(tagId)}</span>)}
            </div>
            <div className = "note">
              {r.note}
            </div>
            <div className = "amount">
              {r.amount}
            </div>
          </Item>;
        })}
      </div>
    </Layout>
  );
}

export {Statistics};