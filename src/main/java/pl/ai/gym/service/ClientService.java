package pl.ai.gym.service;
import pl.ai.gym.model.Client;
import java.util.List;

/**
 * Created by Łukasz Klimowicz.
 */


public interface ClientService {
    public Client addClient(Client client);
    public void deleteClient(Integer clientId);
    public List<Client> findAll();

}