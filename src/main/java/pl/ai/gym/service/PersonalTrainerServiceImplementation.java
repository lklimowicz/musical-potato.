package pl.ai.gym.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.ai.gym.model.PersonalTrainer;
//import pl.ai.gym.service.PersonalTrainerService;
import pl.ai.gym.repository.PersonalTrainerRepository;
import java.util.List;

/**
 * Created by Łukasz Klimowicz
 */

@Service
public class PersonalTrainerServiceImplementation implements PersonalTrainerService {

        @Autowired
        private PersonalTrainerRepository personalTrainerRepository;

        @Override
        public PersonalTrainer addPersonalTrainer(PersonalTrainer personalTrainer)
        {
            return personalTrainerRepository.save(personalTrainer);
        }

        @Override
        public void deletePersonalTrainer(Integer trainerId) {
            personalTrainerRepository.delete(trainerId);
        }

        @Override
        public List<PersonalTrainer> findAll()
        {
            return personalTrainerRepository.findAll();
        }
    }
