package pl.ai.gym.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import pl.ai.gym.model.PersonalTrainer;

/**
 * Created by Łukasz Klimowicz.
 */
public interface PersonalTrainerRepository  extends JpaRepository<PersonalTrainer,Integer>{

}
