import '../App.css';
import MemberList  from '../components/MemberList';
import React, {useEffect, useState} from 'react';
import Nav from '../components/Nav';
import axios from "axios";

const MemList = () => {
    // json 데이터, 배열객체(일반변수는 새로고침해야 화면에 반영됨)
  // useState변수는 자동으로 화면에 적용
  // useEffect사용해서 DB에서 데이처 가져와서 movies에 저장
  const [users,setUsers] = useState([]);

  // 서버와 통신해서 데이터 가져오기
  // 스프링에 있는 url주소 입력
  useEffect(
    () => {
      axios.get("http://localhost:8181/member/memberList")
      .then(
        response =>{
          console.log(response);
          setUsers(response.data);
        }
      )
    },[]
  )


  // 데이터 삭제(delete - delete 방식)
  const delMovie = (id) => {
    console.log(id+"번");
    // 데이터 삭제 : filter 해당되는 데이터를 리턴해서 돌려줌
    setUsers(
      users.filter((users)=>{
        return (users.id != id) 
      })
    );
  }

  // 데이터 수정(update - put 방식)


  // 반복문 map함수 return해서 값을 돌려줌(for문 단순반복만, return없음)
  // 최초 스프링에서 데이터를 useEffect를 가져와서 map으로 리스트 출력

  // 데이터 출력(select - get방식)  삼항식을 사용해서 영화정보 데이터 없을 경우 처리
  const members = 
  users.length?
  users.map((users)=>{
    return (
      <MemberList users={users} key={users.id} delMovie={delMovie}/>
    );
  }):"회원정보 데이터가 없습니다."
  ;

  return (
    <div>
      <Nav/>
      <div className="main">
        <h2>회원 리스트</h2>
        <div>
          {members}
        </div>
      </div>
    </div>
  );
}

export default MemList;