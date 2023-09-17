package rafaelswr.dev.movies.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rafaelswr.dev.movies.Entities.Movie;
import rafaelswr.dev.movies.Repositories.MovieRepository;

import java.util.List;

@Service
public class MovieService  {

    //instancia da interface
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

}
