package rafaelswr.dev.movies.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import rafaelswr.dev.movies.Entities.Movie;

import java.util.Optional;


//communication with mongo database
@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

    /*
    * ?0 é um marcador de posição para um parâmetro.
    * O ?0 indica que você está passando
    * um parâmetro (o primeiro parâmetro do método) para a consulta.*/

    //query db.movie.find({ "ImdbId": "value_parameter" })
    @Query("{ 'ImdbId' : ?0 }")
    Optional<Movie> findImdbId(String id);




}
