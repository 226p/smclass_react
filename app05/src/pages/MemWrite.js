import '../App.css';
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import React, {useState} from 'react';
import Nav from '../components/Nav';

const MemWrite = () => {
    // json 데이터, 배열객체(일반변수는 새로고침해야 화면에 반영됨)
  // useState변수는 자동으로 화면에 적용
  // useEffect사용해서 DB에서 데이처 가져와서 movies에 저장
  const [movies,setMovies] = useState(
    [
      {no:3,title:"해리포터3",date:"2022-01-01"},
      {no:2,title:"해리포터2",date:"2021-01-01"},
      {no:1,title:"해리포터1",date:"2020-01-01"}
    ]
  );

  // 데이터 추가(insert - post 방식)
  const addMovie = (movie) => {
    setMovies([movie,...movies]);  // 구조분해 할당
  }


  return (
    <div>
      <Nav/>
      <div className="main">
        <h2>회원정보 쓰기</h2>
        <Form addMovie={addMovie} />
      </div>
    </div>
  );
}

export default MemWrite;