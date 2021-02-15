import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Nav} from './Nav';

const Wrapper = styled.div`
  color:#333;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
    flex-grow: 1;
    overflow: auto;
`;
type Props = {
  className?: string;
  scrollTop?: number
}
const Layout: React.FC<Props> = (props: any) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {return; }
      mainRef.current.scrollTop = props.scrollTop;
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref = {mainRef} className = {props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>);
};
export {Layout};