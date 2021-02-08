import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);  }
  > div{
    float:left;flex-wrap: wrap;
    > button{
      border: none;
      font-size: 18px;
      width: 20%;height: 64px;
      &.zero{
        width: 40%;
      }
      &.ok{
        height: 128px;
        float: right;
      }
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(6){
        background: #e0e0e0;
      }
      &:nth-child(3),&:nth-child(7),
      &:nth-child(11){
        background: #d3d3d3;
      }
      &:nth-child(4),&:nth-child(8),
      &:nth-child(12),&:nth-child(16){
        background: #c1c1c1;
      }
      &:nth-child(5),&:nth-child(9),
      &:nth-child(13){
        background: #d8d8d8;
      }
      &:nth-child(10),&:nth-child(14),&:nth-child(17){
        background: #a9a9a9;
      }
      &:nth-child(18){
        background:#9a9a9a;
      }
      &:nth-child(15){
      background: #8b8b8b;
      }
    }
  }
`;
const NumberPad = () => {
  const [output, _setOutput] = useState('0');
  const [type, setType] = useState('');
  const [result, setResult] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (!text) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (type === '=') {
          setOutput(text);
          setType('');
        } else {
          if (output === '0') {
            setOutput(text);
          } else {
            setOutput(output + text);
          }
        }
        break;
      case '+':
      case '-':
      case '*':
      case '÷':
        setType(text);
        setResult(output);
        _setOutput('0');
        break;
      case '.':
        if (output.indexOf('.') >= 0) {return;}
        setOutput(output + '.');
        break;
      case '清空':
        setType('');
        setOutput('');
        break;
      case '删除':
        if (type === '=' || output.length === 1) {
          setOutput('');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case 'ok':
        const resultNum = parseFloat(result);
        const outputNum = parseFloat(output);
        if (type === '+') {
          _setOutput((resultNum + outputNum).toString());
        } else if (type === '-') {
          _setOutput((resultNum - outputNum).toString());
        } else if (type === '*') {
          _setOutput((resultNum * outputNum).toString());
        } else if (type === '÷') {
          _setOutput((resultNum / outputNum).toString());
        }
        setType('=');
        break;
    }
  };
  return (
    <Wrapper>
      <output>{output}</output>
      {type}
      <div className = 'clearfix' onClick = {onClickButtonWrapper}>
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
        <button className = 'ok'>ok</button>
        <button>.</button>
        <button className = 'zero'>0</button>
        <button>÷</button>
      </div>
    </Wrapper>
  );
};

export {NumberPad};