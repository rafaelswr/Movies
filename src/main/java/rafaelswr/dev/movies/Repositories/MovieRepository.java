package rafaelswr.dev.movies.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import rafaelswr.dev.movies.Entities.Movie;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

}
