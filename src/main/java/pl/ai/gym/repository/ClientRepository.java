package pl.ai.gym.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import pl.ai.gym.model.Client;

/**
 * Created by Łukasz Klimowicz.
 */
public interface ClientRepository  extends JpaRepository<Client,Integer>{

}
