import React from 'react';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {Icon} from '../components/Icon';
import {Button} from '../components/Button';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom:1px solid #d5d5d5;
    margin-left:16px ;
    > a{
      display: flex;
      padding: 12px 16px 12px 0;
      justify-content: space-between;
      align-items: center;  
    }
  }
`;


function Tags() {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key = {tag.id}>
            <Link to = {'/tags/' + tag.id}>
              <span>{tag.name}</span>
              <Icon name = 'right'/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick = {addTag}>新建标签</Button>
      </Center>
    </Layout>

  );
}

export {Tags};