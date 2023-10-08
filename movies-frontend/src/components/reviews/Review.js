import React from 'react'
import { useEffect, useRef } from 'react';
import api from "../../api/axiosConfig";
import { useParams } from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";
import ReviewForm from '../review/ReviewForm';


const Review = ({getMovieData, movie, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams(); 
    const movieId = params.movieId; 

    useEffect(()=>{
        getMovieData(movieId); 
    },[])

    const addReview = async (e)=>{
        e.preventDefault(); 

        const rev = revText.current; 

        try{
            
            const response = await api.post("/api/v1/reviews",{body:rev.value,imdbId:movieId});

            const updateReviews = [...reviews,{body:rev.value}];
            rev.value = "";

            setReviews(updateReviews);   
        
        }catch(error){
            console.error(error);
        }
    }

    return (
    
        <Container>
            <Row>
                <Col>
                    <div style={{marginTop: 20, marginBottom:20 }}>
                        <h3>{movie.title}</h3>
                    </div>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <img src={movie?.poster} alt=""></img>
                </Col>
                <Col>
                    {
                    <>    
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review "></ReviewForm>
                        </Col>        
                    </Row>
                    <Row>
                        <Col>
                            <hr></hr>
                        </Col>
                    </Row>
                    </>    
                    
                    }
                    {
                        reviews?.map((r)=>{
                            return(
                                <>
                                    <Row>
                                       <Col>{r.body}</Col> 
                                    </Row>
                                </>
                            )
                        })
                    }
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr></hr>
                </Col>
            </Row>
        </Container>
    
  )
}

export default Review;