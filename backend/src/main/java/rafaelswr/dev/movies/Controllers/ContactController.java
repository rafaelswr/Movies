package rafaelswr.dev.movies.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import rafaelswr.dev.movies.Entities.Contact;
import rafaelswr.dev.movies.Repositories.ContactRepository;
import rafaelswr.dev.movies.Services.ContactService;

import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("")
    public ResponseEntity<Contact> createContact(@RequestBody Map<String, String> payload){
        return new ResponseEntity<>(contactService.insertContact(payload.get("email"), payload.get("bodyContact")), HttpStatus.CREATED);
    }


}
