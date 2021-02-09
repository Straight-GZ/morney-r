import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {Icon} from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';

const Header = styled.header`
  background: white;
  line-height: 20px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
type Params = { id: string }
const Tag: React.FC = () => {
  let {id} = useParams<Params>();
  const {findTag} = useTags();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Header>
        <Icon name = 'left'/>
        <span>编辑标签</span>
        <Icon/>
      </Header>
      <Input label = '标签名' value = {tag.name}/>
      <Button>删除标签</Button>
    </Layout>
  );
};
export {Tag};