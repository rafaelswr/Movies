package rafaelswr.dev.movies.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import rafaelswr.dev.movies.Entities.Contact;
import rafaelswr.dev.movies.Repositories.ContactRepository;

import java.util.Map;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact insertContact(String email , String bodyContact){
       return contactRepository.insert(new Contact(email, bodyContact));
    }

}
