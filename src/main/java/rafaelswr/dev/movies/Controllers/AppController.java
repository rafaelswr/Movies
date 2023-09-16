package rafaelswr.dev.movies.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

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
    @GetMapping("/")
    public String apiIndex(){
        return "exemplo";
    }





}
