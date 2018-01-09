package pl.ai.gym.controler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.ai.gym.model.Client;
import pl.ai.gym.service.ClientService;
import java.util.List;

/**
 * Created by Łukasz Klimowicz.
 */


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClientControler {

    @Autowired
    private ClientService clientService;


    @PostMapping("/addClient")
    public Client addClient(@RequestBody Client client) {
        client = clientService.addClient(client);
        return client;
    }

    @GetMapping(value ="/findClient", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Client> znajdzKlienta(){
        List<Client> clients = clientService.findAll();
        return clients;
    }

    @DeleteMapping("/deleteClient/{id}")
    public void deleteClient(@PathVariable(value = "id") Integer clientId){
        clientService.deleteClient(clientId);
    }

}