package rafaelswr.dev.movies.Controllers;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rafaelswr.dev.movies.Entities.Movie;
import rafaelswr.dev.movies.Services.MovieService;

import java.rmi.MarshalledObject;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {
    /*
    * GetMapping
    * quando você faz uma solicitação GET para
    * a URL "/hello", o método apiIndex() é chamado,
    * e a string "Olá"
    * é retornada. Essa string será enviada de volta
    * ao navegador como a resposta da solicitação e
    * pode ser interpretada pelo navegador.
    * GetEndpoint, user-> url browser -> funcao
    * */

    @Autowired
    private MovieService movieService;

    @GetMapping("/greeting")
    public ResponseEntity<String> greeting(){
        return new ResponseEntity<>("Ola", HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getMovieByImdbId(@PathVariable String imdbId){
        return new ResponseEntity<>(movieService.getMovieByImdb(imdbId), HttpStatus.OK);
    }



}
