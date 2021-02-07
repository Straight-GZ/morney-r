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
      <NumberPad>
        <output>100</output>
        <div className='clearfix'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button className='ok'>ok</button>
        <button>.</button>
        <button className='zero'>0</button>
        <button>÷</button>
        </div>
      </NumberPad>
    </NewLayout>
  );
}

export default Money;