import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom:1px solid #d5d5d5;
    padding: 12px 16px 12px 0;
    margin:0 16px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  font-size:18px;border:none;padding: 8px 12px;
  background: #ac453e;color:white;border-radius: 4px;
`;
const Center = styled.div`
  margin-top: 32px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(t =>
          <li key = {t}>
            <span>{t}</span>
            <Icon name = 'right'/>
          </li>
        )}
      </TagList>
      <Center>
        <Button>新建标签</Button>
      </Center>
    </Layout>

  );
}

export default Tags;