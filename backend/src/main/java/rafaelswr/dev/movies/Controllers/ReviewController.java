package rafaelswr.dev.movies.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import rafaelswr.dev.movies.Entities.Review;
import rafaelswr.dev.movies.Services.MovieService;
import rafaelswr.dev.movies.Services.ReviewService;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("")
    public ResponseEntity<Review> createReview(@RequestBody Map<String,String> payload){
        return new ResponseEntity<>(reviewService.creteReview(payload.get("imdbId"), payload.get("body")), HttpStatus.CREATED);
    }

}
