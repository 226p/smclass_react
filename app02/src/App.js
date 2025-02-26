import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  let name = '홍길동'
  const [ename,setEname] = useState('유관순');
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [a,setA] = useState('');

  const btn = ()=>{
    alert("버튼클릭");
    name = "이순신";
    // document.getElementById("d01").innerText = name;  // 자바스크립트, ajax 데이터값 넣는 방법
    console.log(name);

    // react useState 사용
    setEname('신사임당');
  }

  const loginBtn = () =>{
    alert("로그인버튼 클릭")
  }

  const pwBtn = (e) => {
    console.log("pw input에 글을 입력합니다.");
    // enter키 들어오면 로그인버튼 클릭하도록 구현
    if(e.keyCode == 13){
      loginBtn();
    }
  }

  return (
    <div className="main">
      <h2>게시판</h2>
      <h3 id="d01">{name}</h3>
      <h3>{ename}</h3>
      
      <br/>
      <input type='text' name='id' className="id" onChange={(event)=>setId(event.target.value)} value={id} placeholder='아이디를 입력하세요.'/>
      <br/>
      <input type='text' name='pw' className="pw" onChange={(event)=>setPw(event.target.value)} value={pw} onKeyUp={pwBtn} placeholder='비밀번호를 입력하세요.'/>
      <br/>

      <button onClick={loginBtn}>로그인</button>
      <button onClick={btn}>변경</button>
      {/* <div>{name=='홍길동'?(<h3>홍길동입니다.</h3>):(<h3>홍길동 아닙니다.</h3>)}</div> */}
    </div>
  );
}

export default App;
