import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {Icon} from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const Header = styled.header`
  background: white;
  line-height: 20px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`;
type Params = { id: string }
const Tag: React.FC = () => {
  let {id: idString} = useParams<Params>();
  const {findTag, updateTag} = useTags();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Header>
        <Icon name = 'left'/>
        <span>编辑标签</span>
        <Icon/>
      </Header>
      <Wrapper>{tag &&
			<Input label = '标签名' type = 'text' value = {tag.name}
						 onChange = {(e) => {
               updateTag(tag.id, {name: e.target.value});
             }}
			/>}
      </Wrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};
export {Tag};