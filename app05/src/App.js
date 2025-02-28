import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Form from './components/Form';
import React, {useState} from 'react';

function App() {
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

  // 데이터 삭제(delete - delete 방식)
  const delMovie = (no) => {
    console.log(no+"번");
    // 데이터 삭제 : filter 해당되는 데이터를 리턴해서 돌려줌
    setMovies(
      movies.filter((movie)=>{
        return (movie.no != no) 
      })
    );
  }

  // 데이터 수정(update - put 방식)


  // 반복문 map함수 return해서 값을 돌려줌(for문 단순반복만, return없음)
  // 최초 스프링에서 데이터를 useEffect를 가져와서 map으로 리스트 출력

  // 데이터 출력(select - get방식)  삼항식을 사용해서 영화정보 데이터 없을 경우 처리
  const mlist = 
  movies.length?
  movies.map((movie)=>{
    return (
      <MovieList movie={movie} key={movie.no} delMovie={delMovie}/>
    );
  }):"영화정보 데이터가 없습니다."
  ;

  return (
    <div className="main">
      <h2>영화정보 리스트</h2>
      <Form addMovie={addMovie} />
      <div>
        {mlist}
      </div>
    </div>
  );
}

export default App;

