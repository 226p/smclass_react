import '../App.css';
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import React, {useState} from 'react';
import Nav from '../components/Nav';
import i_1 from '../images/로제1.jpg'

const Home = () => {
  return (
    <div>
      <Nav/>
      <div className="main">
        <h2>메인페이지</h2>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/로제4.jpg`}/>
        </div>
        <br/>
        <div>
          <img src={i_1} />
        </div>
      </div>
    </div>
  );
}

export default Home;