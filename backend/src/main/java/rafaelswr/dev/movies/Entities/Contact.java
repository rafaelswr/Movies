package rafaelswr.dev.movies.Entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "contacts")
@NoArgsConstructor
@AllArgsConstructor
public class Contact {

    @Id
    private ObjectId id;

    private String email;
    private String bodyContact;

    public Contact(String email, String bodyContact){
        this.email = email;
        this.bodyContact = bodyContact;
    }
}
