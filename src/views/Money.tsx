import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategroySection';
import {NumberPad} from './Money/NumberPadSection';
import {NoteSection} from './Money/NoteSection';
import {TagsSection} from './Money/TagsSection';


const NewLayout = styled(Layout)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as ('+' | '-'),
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <NewLayout>
      <TagsSection value = {selected.tags}
                   onChange = {tags => onChange({tags})}/>
      <NoteSection value = {selected.note}
                   onChange = {note => onChange({note})}/>
      <CategorySection value = {selected.category}
                       onChange = {category => onChange({category})}/>
      <NumberPad value = {selected.amount}
                 onChange = {amount => onChange({amount})}
                 onOk = {() => {}}/>;
    </NewLayout>
  );
}

export default Money;