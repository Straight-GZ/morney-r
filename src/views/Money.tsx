import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategroySection';
import {NumberPad} from './Money/NumberPadSection';
import {NoteSection} from './Money/NoteSection';
import {TagsSection} from './Money/TagsSection';
import {Layout} from '../components/Layout';
import {useRecord} from '../hooks/useRecords';


const NewLayout = styled(Layout)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;
const defaultRecord = {
  tagIds: [] as number[],
  note: '',
  category: '-' as ('+' | '-'),
  amount: 0
};
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

function Money() {
  const [selected, setSelected] = useState(defaultRecord);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const {addRecord} = useRecord();
  const submit = () => {
    if (addRecord(selected)) {
      alert('已保存');
      setSelected(defaultRecord);
    }
  };
  return (
    <NewLayout scrollTop={9999}>
      <TagsSection value = {selected.tagIds}
                   onChange = {tagIds => onChange({tagIds})}/>
      <NoteSection value = {selected.note}
                   onChange = {note => onChange({note})}/>
      <CategoryWrapper>
        <CategorySection value = {selected.category}
                         onChange = {category => onChange({category})}/>
      </CategoryWrapper>

      <NumberPad value = {selected.amount}
                 onChange = {amount => onChange({amount})}
                 onOk = {submit}/>
    </NewLayout>
  );
}

export {Money};