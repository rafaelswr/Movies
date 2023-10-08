import { useEffect, useContext, useState } from 'react';
import './App.css';
import api from "./api/axiosConfig";
import Layout from './components/Layout';
import {Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import Contact from './components/contacts/Contact';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Review from './components/reviews/Review';


function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);



  
  const getMovies = async ()=>{
   
    try{
      const response = await api.get("/api/v1/movies");
     
      setMovies(response.data);      
    }catch(err){
      console.log(err);
    }

  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;
        console.log(singleMovie);
       
        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }


  useEffect(()=>{
    getMovies(); 
  },[]);

  return (
    <div className="App" style={{margin:0}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies}/>}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/Reviews/:movieId' element={<Review movie={movie} reviews={reviews} getMovieData={getMovieData} setReviews={setReviews}/>} ></Route>
        </Route>

      </Routes>

    </div>
  );
}


export default App;
