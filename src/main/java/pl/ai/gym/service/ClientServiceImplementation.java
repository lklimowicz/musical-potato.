package pl.ai.gym.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.ai.gym.model.Client;
//import pl.ai.gym.service.ClientService;
import pl.ai.gym.repository.ClientRepository;
import java.util.List;

/**
 * Created by Łukasz Klimowicz.
 */

@Service
public class ClientServiceImplementation implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client addClient(Client client)
    {
        return clientRepository.save(client);
    }

    @Override
    public void deleteClient(Integer clientId) {
        clientRepository.delete(clientId);
    }

    @Override
    public List<Client> findAll()
    {
        return clientRepository.findAll();
    }
}

