import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);

  // useEffect : 화면이 리로딩이 되면 실행되는 함수
  // 최초 데이터를 가져와서 화면에 출력할 때, 특정변수가 변경 될 때 명령어를 실행해야 할 때 사용
  useEffect(
    () =>{
      console.log("useEffect 변수 상관없이 실행");
    }
  );

  useEffect(
    () =>{
      console.log("처음 한 번만 실행");
    },[]
  );

  useEffect(
    () =>{
      console.log("useEffect count : "+count);
    },[count]
  );

  useEffect(
    () =>{
      console.log("useEffect count2 : "+count2);
    },[count2]
  );



  const countBtn = () =>{
    setCount(count+1);
  }

  const count2Btn = () =>{
    setCount2(count2+1);
  }

  return (
    <div className="main">
      <h2>게시판</h2>
      <div className="idTxt">count : {count}</div>
      <button onClick={countBtn}>카운트 증가</button>
      <br/>
      <div className="idTxt">count : {count2}</div>
      <button onClick={count2Btn}>카운트 증가</button>
      <br/>

      <Form/>
    </div>
  );
}

export default App;
