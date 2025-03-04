import React from 'react';
import { Link } from 'react-router-dom';

// prop 변수 2개 -> 구조분해 : {}를 사용하여 prop변수를 분해해서 받을 수 있음
const MemberList = ({users}) =>{


  return(
    <>
    <div className="card">
      <h5 className="card-header">아이디2 {users.id}</h5>
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/MemView/${users.id}`}>{users.name}</Link>
          </h5>
        <p className="card-text">{users.email}</p>
        <a href="#" className="btn btn-primarymt">수정</a>
        <a className="btn btn-primary">삭제</a>
      </div>
    </div>
  </>
  )
}

export default MemberList;