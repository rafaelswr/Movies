import { useEffect, useContext, useState } from 'react';
import './App.css';
import api from "./api/axiosConfig";


function App() {

  const [movies, setMovies] = useState();

  
  const getMovies = async ()=>{
   
    try{
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);      

    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    getMovies(); 
  },[]);

  return (
    <div className="App" style={stlye}>
      <h1>Hello Style!</h1>
    </div>
  );
}


const stlye = {
  flex:1,
  margin: '0 auto',
  width:"100%",
  alignItems:"center", 
  borderStyle:"dashed",
  borderWidth:1, 
  borderColor:"red"
}

export default App;
