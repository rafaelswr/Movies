package rafaelswr.dev.movies.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rafaelswr.dev.movies.Entities.Movie;
import rafaelswr.dev.movies.Services.MovieService;

import java.util.List;

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

    @GetMapping("")
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<>(movieService.allMovies(), HttpStatus.OK);
    }





}
