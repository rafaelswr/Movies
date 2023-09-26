package rafaelswr.dev.movies.Services;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rafaelswr.dev.movies.Entities.Movie;
import rafaelswr.dev.movies.Repositories.MovieRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService  {

    //instancia da interface
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovieByImdb(String imdbId){
        return movieRepository.findImdbId(imdbId);
    }


}
