import '../App.css';
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import React, {useEffect, useState} from 'react';
import Nav from '../components/Nav';
import View from '../components/View';
import axios from "axios";
import { useParams } from 'react-router-dom';

const MemView = () => {
  const [user,setUser] = useState([]);
  const params = useParams(); // parameter값을 변수로 저장
  console.log(params.id);

  useEffect(
    () => {
      axios.get(`http://localhost:8181/member/memberView?id=${params.id}`)
      .then(
        response =>{
          console.log(response);
          setUser(response.data);
        }
      )
    },[]
  )

  return (
    <div>
      <Nav/>
      <div className="main">
        <h2>회원 상세보기</h2>
        <View user={user}/>
      </div>
    </div>
  );
}

export default MemView;