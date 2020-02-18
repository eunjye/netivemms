import React from 'react';
import Member from './components/Member';
import logo from './logo.svg';
import './scss/App.scss';

const members = [
  {
    'number': 1,
    'team': '구축',
    'name': '은지혜1',
    'rank': '차장',
  },
  {
    'number': 2,
    'team': '운영',
    'name': '은지혜2',
    'rank': '과장',
  },
  {
    'number': 3,
    'team': '구축',
    'name': '은지혜3',
    'rank': '사원',
  }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HI</h1>
      </header>
      <table className="tbl_basic">
        <thead>
          <th scope="col">사원번호</th>
          <th scope="col">팀</th>
          <th scope="col">이름</th>
          <th scope="col">직금</th>
        </thead>
        <tbody>
          {members.map(m => {
            return <Member key={m.number} number={m.number} name={m.name} team={m.team} rank={m.rank} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
