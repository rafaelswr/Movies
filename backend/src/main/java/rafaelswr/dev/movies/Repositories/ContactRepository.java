package rafaelswr.dev.movies.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import rafaelswr.dev.movies.Entities.Contact;

@Repository
public interface ContactRepository extends MongoRepository<Contact, ObjectId> {
}
