import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategroySection';
import {NumberPad} from './Money/NumberPadSection';
import {NoteSection} from './Money/NoteSection';
import {TagsSection} from './Money/TagsSection';


const NewLayout=styled(Layout)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <NewLayout>
      <TagsSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPad/>
    </NewLayout>
  );
}

export default Money;