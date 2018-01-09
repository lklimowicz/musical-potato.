package pl.ai.gym.controler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.ai.gym.model.PersonalTrainer;
import pl.ai.gym.service.PersonalTrainerService;
import java.util.List;

/**
 * Created by Łukasz Klimowicz.
 */

    @RestController
    @CrossOrigin(origins = "http://localhost:4200")
    public class PersonalTrainerControler {

        @Autowired
        private PersonalTrainerService personalTrainerService;


        @PostMapping("/addPersonalTrainer")
        public PersonalTrainer addPersonalTrainer(@RequestBody PersonalTrainer personalTrainer) {
            personalTrainer = personalTrainerService.addPersonalTrainer(personalTrainer);
            return personalTrainer;
        }
        @GetMapping(value ="/findPersonalTrainer", produces = MediaType.APPLICATION_JSON_VALUE)
        public List<PersonalTrainer> findPersonalTrainer(){
            List<PersonalTrainer> personalTrainers = personalTrainerService.findAll();
            return personalTrainers;
        }
        @DeleteMapping("/deletePersonalTrainer/{id}")
        public void deletePersonalTrainer(@PathVariable(value = "id") Integer trainerId){
            personalTrainerService.deletePersonalTrainer(trainerId);
        }
    }

