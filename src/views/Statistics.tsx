import {Layout} from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategroySection';
import {useTags} from '../hooks/useTags';
import {RecordItem, useRecord} from '../hooks/useRecords';
import styled from 'styled-components';
import dayjs from 'dayjs';

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

const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {getName} = useTags();
  const {records} = useRecord();
  const selected = records.filter(r => r.category === category);
  const hash: { [key: string]: RecordItem[] } = {};
  selected.map(x => {
    const key = dayjs(x.createAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(x);
  });

  const beautify = (string: string) => {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return string;
    }
  };
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {return 0;}
    if (a[0] > b[0]) {return -1;}
    if (a[0] < b[0]) {return 1;}
    return 0;
  });
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value = {category}
                         onChange = {category => setCategory(category)}/>

      </CategoryWrapper>
      <div>
        {array.map(([date, records]) => {
          return <div key = {date}>
            <Title>
              <span>{beautify(date)}</span>
              <span>￥{records.reduce((sum, x) => sum += x.amount, 0)}</span>
            </Title>
            <div>
              {records
                .map(r => {
                  return <Item key = {r.createAt}>
                    <div className = 'tags oneLine'>
                      {r.tagIds.map(tagId => <span
                        key = {tagId}>{getName(tagId)}{r.tagIds.indexOf(tagId) < r.tagIds.length - 1 ? '，' : ''}</span>)
                      }
                    </div>
                    <div className = "note">
                      {r.note}
                    </div>
                    <div className = "amount">
                      ￥{r.amount}
                    </div>
                  </Item>;
                })}
            </div>
          </div>;
        })}
      </div>
    </Layout>
  );
}

export {Statistics};