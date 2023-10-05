import React from "react"
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Hero = ({movies}) => {
  return (
    <div className="movie-carousel-container" >
      <Carousel>
        {
          movies.map((ele)=>{
              return (
                <Paper>
                  <div className="movie-card-container">
                    <div className="movie-card" style={{"--img":`url(${ele.backdrops[1]})`}}>
                      <div className="movie-detail" >
                      <div className="movie-poster">
                          <img src={ele.poster} alt=""></img>
                        </div>
                        <div className="movie-title">
                          <h3>{ele.title}</h3>
                        </div>
                        <div className="movie-buttons-container">
                            <Link to={`/Trailer/${ele.trailerLink.substring(ele.trailerLink.length-11)}`}>  
                              <div className="play-button-icon-container">
                                <FontAwesomeIcon icon={faCirclePlay}  className="play-button-icon"/>
                              </div>
                            </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              )
          })
        }
      </Carousel>
    </div>
  )
};

export default Hero;

