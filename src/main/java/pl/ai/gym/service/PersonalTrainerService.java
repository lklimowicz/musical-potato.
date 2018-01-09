package pl.ai.gym.service;
import pl.ai.gym.model.PersonalTrainer;
import java.util.List;

/**
 * Created by Łukasz Klimowicz.
 */


public interface PersonalTrainerService {
    public PersonalTrainer addPersonalTrainer(PersonalTrainer personalTrainer);
    public void deletePersonalTrainer(Integer trainerId);
    public List<PersonalTrainer> findAll();
}