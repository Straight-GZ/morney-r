import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk?: () => void
}
const NumberPad: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let value;
    if (output.length > 16) {
      value = output.slice(0, 16);
    } else if (output.length === 0) {
      value = '0';
    } else {
      value = output;
    }
    _setOutput(value);
    props.onChange(parseFloat(value));
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (!text) {return;}
    if (text === 'ok') {
      props.onOk && props.onOk();
      _setOutput('0');
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <output>{output}</output>
      <div className = 'clearfix' onClick = {onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className = 'ok'>ok</button>
        <button>.</button>
        <button className = 'zero'>0</button>
      </div>
    </Wrapper>
  );
};

export {NumberPad};