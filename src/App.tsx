import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './compontents/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
    flex-grow: 1;
    overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Redirect exact from = "/" to = "/statistics"/>
            <Route path = "/tags">
              <Tags/>
            </Route>
            <Route path = "/money">
              <Money/>
            </Route>
            <Route path = "/statistics">
              <Statistics/>
            </Route>
            <Route path = "*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return <h2>页面不存在</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}

function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记账</h2>;
}

export default App;
