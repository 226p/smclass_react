import React from 'react';

// prop 변수 2개 -> 구조분해 : {}를 사용하여 prop변수를 분해해서 받을 수 있음
const MovieList = ({movie,delMovie}) =>{
  const deleteBtn = () => {
      alert(movie.no+"번 데이터를 삭제합니다.");
      delMovie(movie.no);  // 삭제처리
  }

  return(
    <>
    <div className="card">
      <h5 className="card-header">영화정보 {movie.no}</h5>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.date}</p>
        <a href="#" className="btn btn-primarymt">수정</a>
        <a onClick={deleteBtn} className="btn btn-primary">삭제</a>
      </div>
    </div>
  </>
  )
}

export default MovieList;