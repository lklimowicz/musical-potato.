package pl.ai.gym.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import pl.ai.gym.model.Gym;

/**
 * Created by Łukasz Klimowicz.
 */
public interface GymRepository  extends JpaRepository<Gym,Integer>{

}
