package rafaelswr.dev.movies.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import rafaelswr.dev.movies.Entities.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {

}
